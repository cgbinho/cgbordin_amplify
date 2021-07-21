import React from 'react';
import Head from 'next/head';
import { AboutComponent } from '../../components/About';
import Layout from '../../components/Layout';
import { Container } from '../../styles/home';

const About = ({ content }) => {
  return (
    <Layout>
      <Head>
        <title>CGBORDIN - Cleber Galves Bordin - {content.title}</title>
      </Head>
      <Container>
        <AboutComponent {...{ content }} />
      </Container>
    </Layout>
  );
};

export default About;
