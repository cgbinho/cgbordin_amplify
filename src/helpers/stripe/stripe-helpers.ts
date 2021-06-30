// import Stripe from 'stripe';

// interface IPrice extends Stripe.Price {
//   product: Stripe.Product;
// }

// interface IProps {
//   prices: IPrice[];
// }

export function formatAmountForDisplay(
  amount: number,
  currency: string
): string {
  const numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  return numberFormat.format(amount);
}

export function formatAmountForStripe(
  amount: number,
  currency: string
): number {
  const numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency: boolean = true;
  for (const part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

export function formatCheckoutItem(price: any) {
  const { id, currency, unit_amount } = price;

  return {
    product: {
      id: price.product.id,
      name: price.product.name,
      description: price.product.description,
      images: price.product.images,
    },
    id,
    currency,
    unit_amount,
  };
}