import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiLock, FiMail } from 'react-icons/fi';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import Layout from '../../components/Layout';
import { useAuth } from '../../contexts/auth';
import { getCurrentAuthenticatedUser } from '../../helpers/users';
import { signInSchema } from '../../schemas';
import { Container } from '../../styles/home';
import { ModalContainer } from '../../styles/modal';

const SignIn = () => {
  const { isLoading, isError, signIn } = useAuth();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      await signIn({ email, password });
      router.push('/projects');
    } catch {}
  });

  return (
    <Layout>
      <Head>
        <title>CGBORDIN - Cleber Galves Bordin - SignIn</title>
      </Head>
      <Container>
        <section className="content">
          <h1>Entrar</h1>
          <form onSubmit={onSubmit} method="post">
            <Input
              name="email"
              label="Email"
              type="text"
              placeholder="seu@email.com"
              icon={FiMail}
              register={register}
              errors={errors?.email}
            />
          </form>
        </section>
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

export default SignIn;
