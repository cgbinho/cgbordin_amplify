import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  CreateTodoInput,
  CreateTodoMutation,
  ListTodosQuery,
  Todo,
} from '../API';
import awsExports from '../aws-exports';
import { useAuth } from '../contexts/auth';
import { createTodo } from '../graphql/mutations';
import { listTodos } from '../graphql/queries';
import styles from '../styles/Home.module.css';

Amplify.configure({ ...awsExports, ssr: true });

export default function Home({ todos = [] }: { todos: Todo[] }) {
  const { user, isLoading, isError, signUp, signIn, signOut } = useAuth();
  const router = useRouter();

  console.log('user na page: ', user);
  async function handleCreateTodo(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    try {
      const createInput: CreateTodoInput = {
        name: form.get('title').toString(),
        description: form.get('content').toString(),
      };

      const request = (await API.graphql({
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        query: createTodo,
        variables: {
          input: createInput,
        },
      })) as { data: CreateTodoMutation; errors: any[] };

      router.push(`/todo/${request.data.createTodo.id}`);
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }

  const userData = { email: 'cgbordin@gmail.com', password: '123456789' };

  const handleSignUp = async () => {
    return await signUp(userData);
    // console.log('signUp');
  };

  const handleSignIn = async () => {
    return await signIn(userData);
  };

  const handleSignOut = async () => {
    console.log('signOut');
    return await signOut();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Amplify + Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Amplify + Next.js</h1>

        <pre>{JSON.stringify(user, null, 2)}</pre>
        <pre>{JSON.stringify(isLoading, null, 2)}</pre>
        <pre>{JSON.stringify(isError, null, 2)}</pre>

        <p className={styles.description}>
          <code className={styles.code}>{todos.length}</code>
          Todos
        </p>

        <div className={styles.grid}>
          {todos.map((todo) => (
            <a href={`/todo/${todo.id}`} key={todo.id}>
              <h3>{todo.name}</h3>
              <p>{todo.description}</p>
            </a>
          ))}

          <div className={styles.card}>
            <h3 className={styles.title}>New Todo</h3>

            {/* <AmplifyAuthenticator> */}
            <form onSubmit={handleCreateTodo}>
              <fieldset>
                <legend>Title</legend>
                <input
                  defaultValue={`Today, ${new Date().toLocaleTimeString()}`}
                  name="title"
                />
              </fieldset>

              <fieldset>
                <legend>Content</legend>
                <textarea
                  defaultValue="I built an Amplify app with Next.js!"
                  name="content"
                />
              </fieldset>

              <button>Create Todo</button>
              <button type="button" onClick={handleSignUp}>
                Sign Up User
              </button>
              <button type="button" onClick={handleSignIn}>
                Sign In User
              </button>
              <button type="button" onClick={handleSignOut}>
                Sign out
              </button>
              <button type="button" onClick={() => router.push('/protected')}>
                Protected
              </button>
            </form>
            {/* </AmplifyAuthenticator> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const SSR = withSSRContext({ req });

  const response = (await SSR.API.graphql({ query: listTodos })) as {
    data: ListTodosQuery;
  };

  return {
    props: {
      todos: response.data.listTodos.items,
    },
  };
};
