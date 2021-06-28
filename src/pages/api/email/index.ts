import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
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
      // res.status(200).json({ price_id });
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

// const ses = new aws.SES({
//   apiVersion: '2010-12-01',
//   region: 'us-east-1',
//   accessKeyId: process.env.AMAZON_SES_SMTP_USER,
//   secretAccessKey: process.env.AMAZON_SES_SMTP_PASSWORD,
// });

// const transporter = nodemailer.createTransport({
//   SES: { ses, aws },
// });
