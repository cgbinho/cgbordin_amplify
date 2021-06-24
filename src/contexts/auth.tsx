import React, { createContext, useContext, useEffect, useState } from 'react';
import Amplify, { Auth, withSSRContext } from 'aws-amplify';
// import cookie from 'js-cookie';
import awsExports from '../aws-exports';
import { formatUser } from '../helpers/user';
Amplify.configure({ ...awsExports, ssr: true });

interface AuthContextData {
  user: any;
  isLoading: any;
  isError: any;
  signUp({ email, password }: EmailPasswordData): Promise<any>;
  signIn({ email, password }: EmailPasswordData): Promise<any>;
  updateProfile({ email, password }: ProfileData): Promise<void>;
  resetPassword(email: string): Promise<any>;
  signOut(): Promise<void>;
}

interface ProfileData {
  email: string;
  password?: string;
}
interface EmailPasswordData {
  email: string;
  password: string;
}
interface AuthData {
  user: any;
  token?: string;
}

// Helper function to set Cookies:
// const setCookie = (user: any): void => {
//   // set cookies:
//   cookie.set('cgbordinUser', JSON.stringify(user), {
//     secure: process.env.NODE_ENV === 'production',
//     expires: 7,
//     sameSite: 'strict',
//   });
// };

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [isLoading, setLoading] = useState<null | string>(null);
  const [isError, setError] = useState<null | string>(null);
  const [data, setData] = useState<any>(() => {
    // get current user:
    Auth.currentAuthenticatedUser()
      .then((userData) => {
        const {
          signInUserSession: {
            idToken: { payload },
          },
        } = userData;
        // check if user isAdmin:
        const isAdmin =
          payload['cognito:groups'] &&
          payload['cognito:groups'].includes('Admin');

        const user = formatUser({ isAdmin, ...userData });
        setData({ user });
      })
      .catch(() => {
        console.log('not authenticated.');
        setData({});
      });
  });

  async function signUp({ email, password }: EmailPasswordData) {
    console.log({ email, password });
    setError(null);
    setLoading('Loading data...');
    try {
      const { user } = await Auth.signUp({ username: email, password });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
      setError('Error signing up user.');
    } finally {
      setLoading(null);
    }
  }

  async function signIn({ email, password }: EmailPasswordData) {
    // Cognito has username set to be an email:
    const username = email;
    // console.log({ email, password });
    setError(null);
    setLoading('Loading data...');
    try {
      const userData = await Auth.signIn(username, password);
      const user = formatUser(userData);
      // setCookie(user);
      setData({ user });
    } catch (error) {
      console.log(error);
      setError('Error signing up user.');
    } finally {
      setLoading(null);
    }
  }

  async function resendConfirmationCode(username) {
    setError(null);
    setLoading('Loading data...');
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
      setError('Error resending code.');
    } finally {
      setLoading(null);
    }
  }

  async function signOut() {
    setError(null);
    setLoading('Loading data...');
    try {
      await Auth.signOut();
      setData({});
    } catch (error) {
      console.log('error signing out: ', error);
      setError('Error signing out.');
    } finally {
      setLoading(null);
    }
  }

  function resetPassword(email: string) {
    return null;
    // return firebaseAuth.sendPasswordResetEmail(email);
  }

  async function updateProfile({ email, password }) {
    return null;
    // get formData, to update whathever changed:
  }

  return (
    <AuthContext.Provider
      value={{
        user: data,
        isLoading,
        isError,
        signIn,
        signUp,
        signOut,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook that shorthands the context!
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
