import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import awsExports from '../aws-exports';
import { useAuth } from '../contexts/auth';
import { createOrder } from '../graphql/mutations';
import { generateProductCode } from '../helpers/products';
import Layout from '../components/Layout';
import { useRef } from 'react';

Amplify.configure({ ...awsExports, ssr: true });

export default function Home({ todos = [] }) {
  const { user, isLoading, isError, signUp, signIn, signOut } = useAuth();
  const trabalhosRef = useRef(null);
  const router = useRouter();

  console.log('user na page: ', user);

  async function handleCreateTodo(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    // try {
    //   const createInput: CreateTodoInput = {
    //     name: form.get('title').toString(),
    //     description: form.get('content').toString(),
    //   };

    //   const request = (await API.graphql({
    //     authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    //     query: createTodo,
    //     variables: {
    //       input: createInput,
    //     },
    //   })) as { data: CreateTodoMutation; errors: any[] };

    //   router.push(`/todo/${request.data.createTodo.id}`);
    // } catch ({ errors }) {
    //   console.error(...errors);
    //   throw new Error(errors[0].message);
    // }
  }

  async function handleCreateOrder() {
    try {
      const order = await API.graphql({
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        query: createOrder,
        variables: {
          input: {
            userID: '12345',
            userEmail: 'cgbordin@gmail.com',
            amount: 10,
            code: '1234',
            product: 'Aepzera',
            status: 'pending',
          },
        },
      });
      console.log({ order });
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }

  const userData = { email: 'cgbordin@gmail.com', password: '123456789' };

  const handleSignUp = async () => {
    return await signUp(userData);
    // console.log('signUp');
  };

  const handleSignIn = async () => {
    return await signIn(userData);
  };

  const handleSignOut = async () => {
    console.log('signOut');
    return await signOut();
  };

  function handleCreateToken() {
    const code = generateProductCode();
    console.log(code);
  }

  function executeScroll(ref) {
    try {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } catch {}
  }

  const handleClick = () => {
    executeScroll(trabalhosRef);
  };

  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - Cleber Galves Bordin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <pre>{JSON.stringify(isLoading, null, 2)}</pre>
        <pre>{JSON.stringify(isError, null, 2)}</pre>
        <button onClick={handleClick}>handleClick</button>
        <section ref={trabalhosRef}>
          <h1>Trabalhos</h1>
          <p>Teste de texto</p>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // const SSR = withSSRContext({ req });

  // const response = (await SSR.API.graphql({ query: listTodos })) as {
  //   data: ListTodosQuery;
  // };

  // return {
  //   props: {
  //     todos: response.data.listTodos.items,
  //   },
  // };
  return {
    props: {
      todos: 'test',
    },
  };
};
