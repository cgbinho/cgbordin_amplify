import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiLock, FiMail } from 'react-icons/fi';
import Button from '../components/Form/Button';
import Input from '../components/Form/Input';
import Layout from '../components/Layout';
import { useAuth } from '../contexts/auth';
import { getCurrentAuthenticatedUser } from '../helpers/users';
import { forgotPasswordSchema } from '../schemas';
import { Container } from '../styles/home';
import { ModalContainer } from '../styles/modal';
import { FormContainer } from '../styles/form';

const ForgotPassword = () => {
  const { user, forgotPassword, isLoading, isError, signIn } = useAuth();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: 'cgbordin@gmail.com',
    },
  });

  const onSubmit = handleSubmit(async ({ email }) => {
    try {
      await forgotPassword(email);
      router.push('/reset-password');
    } catch {}
  });

  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - Entrar</title>
      </Head>
      <Container>
        <h1>Esqueceu a senha?</h1>
        <p>
          Insira abaixo o seu email, assim enviaremos instruções para gerar uma
          senha nova.
        </p>
        <form onSubmit={onSubmit} method="post">
          <FormContainer>
            <Input
              name="email"
              label="Email"
              type="text"
              placeholder="seu@email.com"
              icon={FiMail}
              register={register}
              errors={errors?.email}
            />
            <Button
              type="submit"
              primary
              isLoading={isLoading}
              width="100%"
              height="40px"
              padding="1em"
            >
              Enviar
            </Button>
            {isError && <p className="error_message">{isError}</p>}
          </FormContainer>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <pre>{JSON.stringify(isLoading, null, 2)}</pre>
          <pre>{JSON.stringify(isError, null, 2)}</pre>
        </form>
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

export default ForgotPassword;
