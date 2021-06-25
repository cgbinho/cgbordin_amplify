import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { formatCheckoutItem } from '../../../helpers/stripe/stripe-helpers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: null,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
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

/* 
Product object:
{
  "id": "prod_JjTaFqUt1CAIWN",
  "object": "product",
  "active": true,
  "created": 1624572158,
  "description": "Aepzera v0.1.0 - Adobe After Effects Extension. ",
  "images": [
    "https://files.stripe.com/links/MDB8YWNjdF8xSjR0NktDNnpkaEJTd1UzfGZsX3Rlc3RfbU9tRGJHdDhGYWc3ZjA0dG1MNzFkVXBW00flHjZB1d"
  ],
  "livemode": false,
  "metadata": {},
  "name": "Aepzera",
  "package_dimensions": null,
  "shippable": null,
  "statement_descriptor": "cgbordin-aepzera",
  "tax_code": null,
  "unit_label": "extension",
  "updated": 1624572158,
  "url": null
}
*/

// Format we need:
/* 
  "name": "Aepzera",
    "description": "Aepzera v0.1.0 - Adobe After Effects Extension.",
    "sku": "prod_JjTaFqUt1CAIWN",
    "price": 6900,
    "image": "https://files.stripe.com/links/MDB8YWNjdF8xSjR0NktDNnpkaEJTd1UzfGZsX3Rlc3RfbU9tRGJHdDhGYWc3ZjA0dG1MNzFkVXBW00flHjZB1d",
    "currency": "BRL"
*/
