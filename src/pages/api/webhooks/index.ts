import { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';
import Cors from 'micro-cors';
import Stripe from 'stripe';
import { generateProductCode } from '../../../helpers/products';
import { sendMail } from '../../../helpers/email';
import { API } from 'aws-amplify';
import { createOrder, updateOrder } from '../../../graphql/mutations';

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
      // create Order:
      const order = await API.graphql({
        // authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
        query: createOrder,
        variables: {
          input: {
            id: paymentIntent.customer,
            userID: '12345',
            userEmail: 'cgbordin@gmail.com',
            amount: 10,
            code: '1234',
            product: 'Aepzera',
            status: 'pending',
          },
        },
      });
      console.log(order);
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
      console.log({ name, email });
      // Create an Aepzera key
      const code = await generateProductCode();
      console.log(code);
      // Update Order Status:
      const orderUpdated = await API.graphql({
        // authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
        query: updateOrder,
        variables: {
          input: {
            id: charge.customer,
            userID: '12345',
            userEmail: 'cgbordin@gmail.com',
            amount: 10,
            code: '1234',
            product: 'Aepzera',
            status: 'fulfilled',
          },
        },
      });
      // Deliver the goods to customer:
      const [data, err] = await sendMail({ name, email, code });
      // if error delivering email:
      if (err) {
        console.log(err.message);
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
