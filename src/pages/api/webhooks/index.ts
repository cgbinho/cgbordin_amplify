import { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';
import Cors from 'micro-cors';
import Stripe from 'stripe';
import { generateProductCode } from '../../../helpers/products';
import { sendMail } from '../../../helpers/email';
import { API } from 'aws-amplify';
// import { createOrder, updateOrder } from '../../../graphql/mutations';
import { postOrder, updateOrder } from '../../../helpers/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: null,
});

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature']!;

    let event: Stripe.Event;

    // stripe construct event:
    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        webhookSecret
      );
    } catch (err) {
      // On error, log and return the error message.
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event.
    console.log('✅ Success:', event.id);

    // Cast event data to Stripe object.
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`💰 PaymentIntent status: ${paymentIntent.status}`);
      console.log(`💰 PaymentIntent id: ${paymentIntent.id}`);
      console.log(`💰 PAYMENTINTENT_id: ${paymentIntent.id}`);
      console.log(
        `💰 PAYMENTINTENT_billing_details: ${paymentIntent?.charges?.data[0]?.billing_details}`
      );

      const { name, email } = paymentIntent?.charges?.data[0]?.billing_details;

      console.log({ paymentIntent });
      // const product = session.line_items[0].description;
      // create Order:
      const [dataIntent, errIntent] = await postOrder({
        id: paymentIntent.id,
        userID: paymentIntent.customer,
        userEmail: email,
        product: paymentIntent.metadata.product_name,
        code: null,
        amount: paymentIntent.amount_received,
        currency: paymentIntent.currency,
        order_status: 'pending',
      });

      if (errIntent) {
        res.status(500).json({ statusCode: 500, message: errIntent.message });
        res.end();
        return;
      }
      // Inform user about the successfull purchase:
      const mailData = {
        name,
        email,
        subject: '[cgbordin.com] Purchase confirmation!',
        text: `Hello, ${name}! Congratulations, you purchased successfully '${paymentIntent.metadata.product_name}' from cgbordin.com!`,
        html: `<p>Hello, ${name}! <br/> Congratulations, you purchased successfully '${paymentIntent.metadata.product_name}' from cgbordin.com!</p>`,
      };
      const [dataEmail, errEmail] = await sendMail(mailData);
      // if error delivering email:
      if (errEmail) {
        console.log(errEmail.message);
        res.status(500).json({ statusCode: 500, message: errEmail.message });
        res.end();
        return;
      }
      console.log(dataIntent);
    } else if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(
        `❌ Payment failed: ${paymentIntent.last_payment_error?.message}`
      );
    } else if (event.type === 'charge.succeeded') {
      const charge = event.data.object as Stripe.Charge;
      console.log(`💵 Charge id: ${charge.id}`);
      // console.log(JSON.stringify(charge, null, 2));
      const { name, email } = charge.billing_details;
      // Create an Aepzera key
      const code = await generateProductCode();

      console.log(`💰 PAYMENTINTENT_id: ${charge.payment_intent}`);

      const [dataCharge, errCharge] = await updateOrder({
        id: charge.payment_intent,
        code,
        order_status: 'paid',
      });

      if (errCharge) {
        res.status(500).json({ statusCode: 500, message: errCharge.message });
        res.end();
        return;
      }
      // Deliver the goods to customer:
      const mailData = {
        name,
        email,
        subject: '[cgbordin.com] Test Message!',
        text: `Hello, ${name}! 'I hope this message gets sent! Your code is ${code}'`,
        html: `<b>Hello, ${name}! <br/>I hope this message gets sent! Your code is ${code}</b>`,
      };
      const [dataEmail, errEmail] = await sendMail(mailData);
      // if error delivering email:
      if (errEmail) {
        console.log(errEmail.message);
        res.status(500).json({ statusCode: 500, message: errEmail.message });
        res.end();
        return;
      }
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default cors(webhookHandler as any);
