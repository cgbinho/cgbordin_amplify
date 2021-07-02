import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiLock, FiMail } from 'react-icons/fi';
import { FaBarcode } from 'react-icons/fa';
import Button from '../components/Form/Button';
import Input from '../components/Form/Input';
import Layout from '../components/Layout';
import { useAuth } from '../contexts/auth';
import { getCurrentAuthenticatedUser } from '../helpers/users';
import { resetPasswordSchema } from '../schemas';
import { Container } from '../styles/home';
import { ModalContainer } from '../styles/modal';
import { FormContainer } from '../styles/form';

const ResetPassword = () => {
  const { user, resetPassword, isLoading, isError, signIn } = useAuth();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      email: 'cgbordin@gmail.com',
      code: '361658',
      new_password: '123456789',
      new_password_confirmation: '123456789',
    },
  });

  const onSubmit = handleSubmit(async ({ email, code, new_password }) => {
    // console.log({ email, code, new_password });
    try {
      await resetPassword({ email, code, new_password });
      router.push('/sign-in');
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - Entrar</title>
      </Head>
      <Container>
        <h1>Resetar sua senha</h1>
        <p>
          Preencha abaixo com o seu email, código enviado pelo email e a senha
          nova.
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
            <Input
              name="code"
              label="Código (Code)"
              type="text"
              placeholder=""
              icon={FaBarcode}
              register={register}
              errors={errors?.code}
            />
            <Input
              name="new_password"
              label="Senha Nova"
              type="text"
              placeholder="seu@email.com"
              icon={FiLock}
              register={register}
              errors={errors?.new_password}
            />
            <Input
              name="new_password_confirmation"
              label="Confirmação da Senha Nova"
              type="text"
              placeholder="seu@email.com"
              icon={FiLock}
              register={register}
              errors={errors?.new_password_confirmation}
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

export default ResetPassword;
