import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { AboutComponent } from '../../components/About';
import Layout from '../../components/Layout';
import { useAuth } from '../../contexts/auth';
import { Container } from '../../styles/home';

const About = ({ content }) => {
  const { user, isLoading, isError, signUp } = useAuth();

  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>CGBORDIN - Cleber Galves Bordin - Sobre</title>
      </Head>
      <Container>
        <AboutComponent {...{ content }} />
      </Container>
    </Layout>
  );
};

export default About;
