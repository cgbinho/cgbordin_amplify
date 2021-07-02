// TESTING PURPOSES
import aws from 'aws-sdk';
import Amplify, { API, withSSRContext } from 'aws-amplify';
import { NextApiRequest, NextApiResponse } from 'next';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import awsExports from '../../../aws-exports';
import { postOrder, updateOrder } from '../../../helpers/db';

Amplify.configure({ ...awsExports, ssr: true });
aws.config.update({ region: 'us-east-1' });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // customer details:
  const { name, email, code } = req.body;

  if (req.method === 'POST') {
    console.log('creating order.');
    const [dataIntent, errIntent] = await postOrder({
      id: 'id',
      userID: 'userID',
      userEmail: 'cgbordin@gmail.com',
      product: 'Aepzera',
      code: '0',
      amount: 6900,
      order_status: 'pending',
    });

    console.log('created order.');
    if (errIntent) {
      res.status(500).json({ statusCode: 500, message: errIntent.message });
      res.end();
    }

    res
      .status(200)
      .json({ statusCode: 200, message: 'Order created successfully!' });
    res.end();
  } else if (req.method === 'PUT') {
    const [dataCharge, errCharge] = await updateOrder({
      id: 'id',
      code: '1234567890',
      order_status: 'paid',
    });

    if (errCharge) {
      res.status(500).json({ statusCode: 500, message: errCharge.message });
      res.end();
    }

    res
      .status(200)
      .json({ statusCode: 200, message: 'Order updated successfully!' });
    res.end();
  } else {
    res.setHeader('Allow', 'PUT');
    res.status(405).end('Method Not Allowed');
  }
}

// try {
//   // createOrder:
//   const SSR = withSSRContext({ req });
//   const order = await API.graphql({
//     // authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
//     query: createOrder,
//     variables: {
//       input: {
//         userID: '12345',
//         userEmail: 'cgbordin@gmail.com',
//         amount: 10,
//         code: '1234',
//         product: 'Aepzera',
//         status: 'pending',
//       },
//     },
//   });
//   console.log(order);
//   res.status(200).json(order);
// } catch (err) {
//   console.log(err);
//   res.status(500).json({ statusCode: 500, message: err.message });
// }
