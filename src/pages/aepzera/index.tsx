import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import React from 'react';
import Stripe from 'stripe';
// import { API, graphqlOperation, withSSRContext } from 'aws-amplify';
// import { listProducts } from '../../graphql/queries';
import { useProducts } from '../../hooks/useProducts';
import getStripe from '../../helpers/stripe/stripe-stripejs';
import { useAuth } from '../../contexts/auth';

import Head from 'next/head';

import { AboutComponent } from '../../components/About';
import Layout from '../../components/Layout';
import { ProjectsComponent } from '../../components/Projects';

import { Container } from '../../styles/home';
import Button from '../../components/Form/Button';
import { fetchPostJSON } from '../../helpers/api';

interface IPrice extends Stripe.Price {
  product: Stripe.Product;
}

interface IProps {
  prices: IPrice[];
}

const Aepzera = () => {
  const router = useRouter();

  const { user } = useAuth();
  // get list of products from api:
  const { data: prices, isLoading, isError } = useProducts();

  const handleClick = async (price) => {
    console.log(price);
    const stripe = await getStripe();

    const session = await fetchPostJSON('/api/checkout_session', {
      price_id: price.id,
      customer_email: user.email,
    });

    // const response = await fetch('/api/checkout_session', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     price_id: price.id,
    //     customer_email: user.email,
    //   }),
    // });

    // const session = await response.json();
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
    <Layout>
      <Head>
        <title>CGBORDIN - Cleber Galves Bordin - Projects</title>
      </Head>
      <Container>
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
                  <p>
                    Cost: R${((price.unit_amount as number) / 100).toFixed(2)}
                  </p>
                  <Button
                    primary
                    width="100%"
                    height="1rem"
                    padding="0.5rem 2rem"
                    onClick={() => handleClick(price)}
                  >
                    Comprar
                  </Button>
                  {/* <CheckoutButton id={product.id} itemName={product.name} /> */}
                  {/* <button onClick={() => handleClick(product)}>
                  View Product
                </button> */}
                </li>
              ))}
            </>
          )}
        </ul>
      </Container>
    </Layout>
  );
};

export default Aepzera;
