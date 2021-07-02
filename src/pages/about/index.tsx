import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { AboutComponent } from '../../components/About';
import Layout from '../../components/Layout';
import { useAuth } from '../../contexts/auth';
import { Container } from '../../styles/home';

const About = () => {
  const { user, isLoading, isError, signUp } = useAuth();

  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>CGBORDIN - Cleber Galves Bordin - SignIn</title>
      </Head>
      <Container>
        <AboutComponent />
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <pre>{JSON.stringify(isLoading, null, 2)}</pre>
        <pre>{JSON.stringify(isError, null, 2)}</pre>
      </Container>
    </Layout>
  );
};

// We are getting the project with an authenticated user, serverside. Beautiful:
// export async function getServerSideProps({ req, res }) {
//   const user = await getCurrentAuthenticatedUser(req);
//   if (!user) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }
//   return { props: { user } };
// }

export default About;
