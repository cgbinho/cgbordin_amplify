import { Amplify } from 'aws-amplify';
import { useRouter } from 'next/router';
import awsExports from '../aws-exports';
import { useAuth } from '../contexts/auth';
import { getCurrentAuthenticatedUser } from '../helpers/getCurrentAuthenticatedUser';

Amplify.configure({ ...awsExports, ssr: true });

function Protected() {
  const {
    user: userContext,
    isLoading,
    isError,
    signUp,
    signIn,
    signOut,
  } = useAuth();
  const router = useRouter();

  return (
    <>
      <pre>{JSON.stringify({ userContext }, null, 2)}</pre>
      <button onClick={() => router.push('/')}>Home</button>
    </>
  );
}

export default Protected;

// We are getting the project with an authenticated user, serverside. Beautiful:
export async function getServerSideProps({ req, res }) {
  const user = await getCurrentAuthenticatedUser(req);
  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return { props: { user } };
}
