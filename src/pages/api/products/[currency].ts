import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { formatCheckoutItem } from '../../../helpers/stripe/stripe-helpers';

// https://github.com/stripe/stripe-node#configuration
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: null,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { currency } = req.query;

  if (req.method === 'GET') {
    // get selected currency ( 'brl' or 'usd'):
    // const { currency } = req.query;
    try {
      const pricesData = await stripe.prices.list({
        active: true,
        limit: 10,
        expand: ['data.product'],
      });
      // console.log(pricesData);
      // get Brl item prices:
      const pricesBrl = pricesData.data.filter(
        (price) => price.currency === currency
      );
      // format items to checkout:
      const prices = pricesBrl.map((price) => formatCheckoutItem(price));

      res.status(200).json(prices);
      // res.status(200).json(prices.data);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}
