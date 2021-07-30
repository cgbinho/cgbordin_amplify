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

const ForgotPassword = ({ content }) => {
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
        <title>CGBORDIN.com - {content.title}</title>
      </Head>
      <Container>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
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
              {content.action_button}
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

export async function getStaticProps({ locale = 'pt-BR' }) {
  // get the locale text for the selected language:
  const content = (await import(`../locales/${locale}/forgot_password.js`))
    .default;

  return {
    props: {
      content,
    },
  };
}

export default ForgotPassword;
