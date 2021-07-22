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
  },
  webpack5: false,
};
