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

const ResetPassword = ({ content }) => {
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
            <Input
              name="code"
              label={content.code}
              type="text"
              placeholder=""
              icon={FaBarcode}
              register={register}
              errors={errors?.code}
            />
            <Input
              name="new_password"
              label={content.new_password}
              type="text"
              placeholder="seu@email.com"
              icon={FiLock}
              register={register}
              errors={errors?.new_password}
            />
            <Input
              name="new_password_confirmation"
              label={content.new_password_confirmation}
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

export async function getStaticProps({ locale }) {
  // get the locale text for the selected language:
  const content = (await import(`../locales/${locale}/reset_password.js`))
    .default;

  return {
    props: {
      content,
    },
  };
}

export default ResetPassword;
