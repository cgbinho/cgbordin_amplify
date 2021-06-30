// TESTING PURPOSES
import Amplify, { API } from 'aws-amplify';
import { NextApiRequest, NextApiResponse } from 'next';
import { createOrder } from '../../../graphql/mutations';
import { sendMail } from '../../../helpers/email';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // customer details:
  const { name, email, code } = req.body;

  if (req.method === 'POST') {
    try {
      // send email:
      const [data, err] = await sendMail({ name, email, code: '123' });
      // if error:
      if (err) {
        console.log(err.message);
      }

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
