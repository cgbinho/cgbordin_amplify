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
import { Container } from '../styles/home';
import { VideoPlyr } from '../components/VideoPlyr';
import { VideoCard } from '../components/Projects/VideoCard';

import { SiJavascript } from 'react-icons/si';
import { AboutCard } from '../components/About/AboutCard';
import { AboutComponent } from '../components/About';
import { ProjectsComponent } from '../components/Projects';
import { AepzeraComponent } from '../components/Aepzera';
import { WelcomeCard } from '../components/WelcomeCard';
import { getSectionByLocale } from '../helpers/api_locale/api_locales';

Amplify.configure({ ...awsExports, ssr: true });

export default function Home({ contentProjects, contentAbout }) {
  return (
    <Layout>
      <Head>
        <title>CGBORDIN - Cleber Galves Bordin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <WelcomeCard />
        <AepzeraComponent />
        <ProjectsComponent {...{ content: contentProjects }} />
        <AboutComponent {...{ content: contentAbout }} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  // get the locale text for the selected language:
  const contentProjects = (await import(`../locales/${locale}/projects.js`))
    .default;
  const contentAbout = (await import(`../locales/${locale}/about.js`)).default;

  return {
    props: {
      contentProjects,
      contentAbout,
    },
  };
}
