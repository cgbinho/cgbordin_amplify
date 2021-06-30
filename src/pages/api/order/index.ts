// TESTING PURPOSES
import Amplify, { API, withSSRContext } from 'aws-amplify';
import { NextApiRequest, NextApiResponse } from 'next';
import { createOrder } from '../../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import awsExports from '../../../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // customer details:
  const { name, email, code } = req.body;

  if (req.method === 'POST') {
    try {
      // createOrder:
      // const SSR = withSSRContext({ req });
      const order = await API.graphql({
        // authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
        query: createOrder,
        variables: {
          input: {
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
      res.status(200).json(order);
    } catch (err) {
      console.log(err);
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
