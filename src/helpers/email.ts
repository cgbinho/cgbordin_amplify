import nodemailer from 'nodemailer';

export const sendMail = async ({
  name,
  email,
  subject,
  text,
  html,
}): Promise<[data: any, error: any]> => {
  const transporter = nodemailer.createTransport({
    host: 'email-smtp.us-east-1.amazonaws.com',
    port: 587,
    auth: {
      user: process.env.AMAZON_SES_SMTP_USER,
      pass: process.env.AMAZON_SES_SMTP_PASSWORD,
    },
  });

  try {
    const response = await transporter.sendMail({
      from: 'cleber@cgbordin.com',
      to: email,
      cc: 'cleber@cgbordin.com',
      subject,
      text,
      html,
      ses: {
        // optional extra arguments for SendRawEmail
        Tags: [
          {
            Name: 'tag_name',
            Value: 'tag_value',
          },
        ],
      },
    });

    console.log('Message sent: %s', response.messageId);
    return [response, null];
    // res.status(200).json({ price_id });
  } catch (err) {
    return [null, err];
  }
};
