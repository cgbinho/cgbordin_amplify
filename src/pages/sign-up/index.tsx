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
import { signUpSchema } from '../../schemas';
import { Container } from '../../styles/home';
import { ModalContainer } from '../../styles/modal';
import { FormContainer } from '../../styles/form';

const SignUp = ({ content }) => {
  const { user, isLoading, isError, signUp } = useAuth();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: 'cgbordin@gmail.com',
      password: '123456789',
      password_confirmation: '123456789',
    },
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      await signUp({ email, password });
      router.push('/');
    } catch {}
  });

  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - {content.title}</title>
      </Head>
      <Container>
        <h1>{content.title}</h1>
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
              name="password"
              label={`${content.password}`}
              type="password"
              placeholder="********"
              icon={FiLock}
              register={register}
              errors={errors?.password}
            />
            <Input
              name="password_confirmation"
              label={`${content.password_confirmation}`}
              type="password"
              placeholder="********"
              icon={FiLock}
              register={register}
              errors={errors?.password_confirmation}
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
          {/* <pre>{JSON.stringify(user, null, 2)}</pre>
          <pre>{JSON.stringify(isLoading, null, 2)}</pre>
          <pre>{JSON.stringify(isError, null, 2)}</pre> */}
        </form>
      </Container>
    </Layout>
  );
};

// We are getting the project with an authenticated user, serverside. Beautiful:
export async function getServerSideProps({ req, res, locale = 'pt-BR' }) {
  const user = await getCurrentAuthenticatedUser(req);
  if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const content = (await import(`../../locales/${locale}/sign_up.js`)).default;

  return { props: { content } };
}

export default SignUp;
