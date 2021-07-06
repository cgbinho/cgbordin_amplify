import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { AboutComponent } from '../../components/About';
import Layout from '../../components/Layout';
import { ProjectsComponent } from '../../components/Projects';
import { useAuth } from '../../contexts/auth';
import { Container } from '../../styles/home';

const Projects = () => {
  const { user, isLoading, isError, signUp } = useAuth();

  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>CGBORDIN - Cleber Galves Bordin - Projects</title>
      </Head>
      <ProjectsComponent />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(isLoading, null, 2)}</pre>
      <pre>{JSON.stringify(isError, null, 2)}</pre>
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

export default Projects;
