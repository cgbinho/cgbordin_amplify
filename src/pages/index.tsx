import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { Amplify, API } from 'aws-amplify';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import awsExports from '../aws-exports';
import Button from '../components/Form/Button';
import Layout from '../components/Layout';
import { AepzeraLogo } from '../components/Logos/aepzera_logo';
import { useAuth } from '../contexts/auth';
import { createOrder } from '../graphql/mutations';
import { generateProductCode } from '../helpers/products';
import { Container, ProjectsContainer } from '../styles/home';
import { VideoPlyr } from '../components/VideoPlyr';
import { VideoCard } from '../components/Projects/VideoCard';

import { SiJavascript } from 'react-icons/si';
import { AboutCard } from '../components/About/AboutCard';

Amplify.configure({ ...awsExports, ssr: true });

export default function Home({ todos = [] }) {
  const { user, isLoading, isError, signUp, signIn, signOut } = useAuth();
  const trabalhosRef = useRef(null);
  const router = useRouter();

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
        <title>CGBORDIN - Cleber Galves Bordin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <section className="content">
          <AepzeraLogo />
          <VideoPlyr {...{ src: 'ysz5S6PUM-U' }} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            diam, nisi non senectus sagittis, tortor et euismod.
          </p>
          <Button primary width="40%" height="40px" padding="1.2rem 0rem">
            Comprar
          </Button>
        </section>
        <hr />
        <section className="content">
          <h3>Projetos</h3>
          <ProjectsContainer>
            <VideoCard
              {...{
                src: 'ysz5S6PUM-U',
                title: 'Huawei',
                description: 'Texto descritivo sobre o vídeo',
              }}
            />
            <VideoCard
              {...{
                src: 'ysz5S6PUM-U',
                title: 'Huawei',
                description: 'Texto descritivo sobre o vídeo',
              }}
            />
            <VideoCard
              {...{
                src: 'ysz5S6PUM-U',
                title: 'Huawei',
                description: 'Texto descritivo sobre o vídeo',
              }}
            />
            <VideoCard
              {...{
                src: 'ysz5S6PUM-U',
                title: 'Huawei',
                description: 'Texto descritivo sobre o vídeo',
              }}
            />
          </ProjectsContainer>
        </section>
        <hr />
        <section className="content">
          <h3>Sobre</h3>
          <AboutCard
            {...{
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam, nisi non senectus sagittis, tortor et euismod.',
              icon: SiJavascript,
            }}
          />
          <AboutCard
            {...{
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam, nisi non senectus sagittis, tortor et euismod.',
              icon: SiJavascript,
            }}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            diam, nisi non senectus sagittis, tortor et euismod.
          </p>
          <p>cleber@cgbordin.com</p>
        </section>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <pre>{JSON.stringify(isLoading, null, 2)}</pre>
        <pre>{JSON.stringify(isError, null, 2)}</pre>
        <button onClick={handleClick}>handleClick</button>
      </Container>
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
