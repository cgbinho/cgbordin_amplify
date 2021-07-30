import { withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { GetOrdersByUserIDQuery, ListOrdersQuery } from '../../API';
import Layout from '../../components/Layout';
import { OrderCard } from '../../components/Orders/OrderCard';
import { useAuth } from '../../contexts/auth';
import { getOrdersByUserID, listOrders } from '../../graphql/queries';
import { getCurrentAuthenticatedUser } from '../../helpers/users';
import { Container } from '../../styles/home';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { EmptyCard } from '../../components/Orders/EmptyCard';

const Orders = ({ content, orders, err }) => {
  const { user, isLoading, isError, signUp } = useAuth();

  const hasItems = orders?.items?.[0];
  console.log({ orders });
  console.log({ err });
  /* 
amount: 10
code: "ae28ea19-a367-4365-86c9-ceb014bce9b0"
createdAt: "2021-07-20T13:24:05.690Z"
currency: null
id: "121212"
orderStatus: "pending"
product: "Aepzera"
updatedAt: "2021-07-20T13:24:05.690Z"
userEmail: "cgbordin@gmail.com"
userID: "3da452be-ee78-4954-b1a0-fbcff9c3619a"
*/

  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - {content.title}</title>
      </Head>
      <Container>
        <h1>{content.title}</h1>
        <div className="content">
          {!hasItems ? (
            <EmptyCard {...{ content }} />
          ) : (
            <>
              {orders.items.map((order) => (
                <OrderCard
                  key={order.id}
                  {...{
                    content,
                    order,
                  }}
                />
              ))}
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
};

// We are getting the project with an authenticated user, serverside. Beautiful:
export async function getServerSideProps({ req, res, locale = 'pt-BR' }) {
  const user = await getCurrentAuthenticatedUser(req);
  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const content = (await import(`../../locales/${locale}/orders.js`)).default;

  // get orders:
  const SSR = withSSRContext({ req });

  try {
    const orders = (await SSR.API.graphql({
      query: getOrdersByUserID,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      variables: {
        userID: user.id,
      },
    })) as { data: GetOrdersByUserIDQuery };

    return {
      props: {
        orders: orders.data.getOrdersByUserID,
        content,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        orders: null,
        err,
        content,
      },
    };
  }
}

export default Orders;
