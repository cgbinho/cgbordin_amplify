import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { formatCheckoutItem } from '../../../helpers/stripe/stripe-helpers';

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: null,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      console.log({ env: process.env.NODE_ENV });
      console.log({ pk: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY });
      console.log({ sk: process.env.NEXT_STRIPE_SECRET_KEY });
      // const { data } = await stripe.products.list({
      //   limit: 3,
      // });

      const pricesData = await stripe.prices.list({
        active: true,
        limit: 10,
        expand: ['data.product'],
      });
      // console.log(pricesData);
      // get Brl item prices:
      const pricesBrl = pricesData.data.filter(
        (price) => price.currency === 'brl'
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
