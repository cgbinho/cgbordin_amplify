import { NextApiRequest, NextApiResponse } from 'next';

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: null,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { price_id, customer_email, product_name, user_id } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email,
      line_items: [{ price: price_id, quantity: 1 }],
      mode: 'payment',
      success_url: `${req.headers.origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/`,
      payment_intent_data: { metadata: { product_name, user_id } },
    });

    res.status(200).json({ id: session.id });
    // res.status(200).json({ price_id });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
