// const stripe_env = process.env.STRIPE_ENV;

// console.log({ nextconfig: stripe_env });

module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['pt-BR', 'en'],
    defaultLocale: 'pt-BR',
  },
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    AMAZON_SES_SMTP_USER: process.env.AMAZON_SES_SMTP_USER,
    AMAZON_SES_SMTP_PASSWORD: process.env.AMAZON_SES_SMTP_PASSWORD,
    COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
    COGNITO_CLIENT_SECRET: process.env.COGNITO_CLIENT_SECRET,
    COGNITO_DOMAIN: process.env.COGNITO_DOMAIN,
    DYNAMODB_ORDER_TABLE: process.env.DYNAMODB_ORDER_TABLE,
  },
  webpack5: false,
};
