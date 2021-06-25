import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import React from 'react';
import Stripe from 'stripe';
// import { API, graphqlOperation, withSSRContext } from 'aws-amplify';
// import { listProducts } from '../../graphql/queries';
import { useProducts } from '../../hooks/useProducts';
import getStripe from '../../helpers/stripe/stripe-stripejs';

interface IPrice extends Stripe.Price {
  product: Stripe.Product;
}

interface IProps {
  prices: IPrice[];
}

export default function Products() {
  const router = useRouter();

  // get list of products from api:
  const { data: prices, isLoading, isError } = useProducts();

  const handleClick = async (price) => {
    console.log(price);
    const stripe = await getStripe();
    const response = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price_id: price.id }),
      // body: JSON.stringify({ price_id: 'price_1J60d8C6zdhBSwU3SRzUY5qA' }),
    });

    const session = await response.json();
    // console.log({ session });
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <ul>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading products.</p>}
      {prices && (
        <>
          {prices.map((price) => (
            <li key={price.product.id}>
              <h2>{price.product.name}</h2>
              <img alt="Image from product" src={price.product.images[0]} />
              <p>{price.product.description}</p>
              <p>Cost: R${((price.unit_amount as number) / 100).toFixed(2)}</p>
              <button onClick={() => handleClick(price)}>Checkout</button>
              {/* <CheckoutButton id={product.id} itemName={product.name} /> */}
              {/* <button onClick={() => handleClick(product)}>
                  View Product
                </button> */}
            </li>
          ))}
        </>
      )}
    </ul>
  );
}

// export async function getServerSideProps({ req, res }) {
//   const SSR = withSSRContext();

//   // get all products
//   const { data } = await SSR.API.graphql({
//     query: listProducts,
//   });
//   const products = data.listProducts.items;
//   console.log(products);
//   return {
//     props: { products },
//   };

// }
