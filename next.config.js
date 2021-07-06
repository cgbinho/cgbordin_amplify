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
};
