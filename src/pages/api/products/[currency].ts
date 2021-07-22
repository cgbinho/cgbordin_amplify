import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { formatCheckoutItem } from '../../../helpers/stripe/stripe-helpers';
import { getParameterFromSystemManager } from '../../../helpers/awsParameterStore';

import aws from 'aws-sdk';

// aws.config.update({ region: 'us-east-1' });

const ssm = new aws.SSM({ region: 'us-east-1' });

const stripePromise = async () => {
  // get secret:
  const stripeSecretKeyValue = await ssm
    .getParameter({
      Name: 'STRIPE_SECRET_KEY',
      WithDecryption: true,
    })
    .promise();
  // return stripe
  return new Stripe(stripeSecretKeyValue?.Parameter?.Value, {
    apiVersion: null,
  });
};

// const stripeSecretKeyValue = await ssm
//   .getParameter({
//     Name: 'STRIPE_SECRET_KEY',
//     WithDecryption: true,
//   })
//   .promise();

// console.log(stripeSecretKeyValue);
// const stripe_secret_key = getParameterFromSystemManager('STRIPE_SECRET_KEY');
// console.log(stripe_secret_key);
// https://github.com/stripe/stripe-node#configuration
// process.env.STRIPE_SECRET_KEY!
// const stripe = new Stripe(stripeSecretKeyValue?.Parameter?.value, {
//   apiVersion: null,
// });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { currency } = req.query;

  // const stripe_secret_key = await getParameterFromSystemManager(
  //   'STRIPE_SECRET_KEY'
  // );
  // console.log({ stripe_secret_key });
  const stripe = await stripePromise();

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
