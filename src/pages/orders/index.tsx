import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import { OrderCard } from '../../components/Orders/OrderCard';
import { useAuth } from '../../contexts/auth';
import { getCurrentAuthenticatedUser } from '../../helpers/users';
import { Container } from '../../styles/home';

const Orders = () => {
  const { user, isLoading, isError, signUp } = useAuth();

  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - Pedidos</title>
      </Head>
      <Container>
        <h1>Pedidos</h1>
        <OrderCard
          {...{ name: 'Aepzera', code: 'ae28ea19-a367-4365-86c9-ceb014bce9b0' }}
        />
      </Container>
    </Layout>
  );
};

// We are getting the project with an authenticated user, serverside. Beautiful:
export async function getServerSideProps({ req, res }) {
  const user = await getCurrentAuthenticatedUser(req);
  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return { props: { user } };
}

export default Orders;
