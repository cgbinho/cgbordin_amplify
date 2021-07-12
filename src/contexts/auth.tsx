import React, { createContext, useContext, useEffect, useState } from 'react';
import Amplify, { API, Auth, withSSRContext } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
// import cookie from 'js-cookie';
import awsExports from '../aws-exports';
import { formatUser } from '../helpers/users';
Amplify.configure({ ...awsExports, ssr: true });

interface ResetPasswordData {
  email: string;
  code: string;
  new_password: string;
}

interface AuthContextData {
  user: any;
  isLoading: any;
  isError: any;
  signUp({ email, password }: EmailPasswordData): Promise<any>;
  signIn({ email, password }: EmailPasswordData): Promise<any>;
  forgotPassword(email: string): Promise<any>;
  resetPassword({ email, code, new_password }: ResetPasswordData): Promise<any>;
  signOut(): Promise<void>;
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
        setData(user);
      })
      .catch(() => {
        setData(null);
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
      setError(`${error.message}`);
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
      setData(user);
    } catch (error) {
      console.log(error);
      setError(`${error.message}`);
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
      setError(err.message);
    } finally {
      setLoading(null);
    }
  }

  async function signOut() {
    setError(null);
    setLoading('Loading data...');
    try {
      await Auth.signOut();
      setData(null);
    } catch (error) {
      console.log('error signing out: ', error);
      setError('Error signing out.');
    } finally {
      setLoading(null);
    }
  }

  async function forgotPassword(email: string) {
    setError(null);
    setLoading('Loading data...');
    try {
      await Auth.forgotPassword(email);
      setData(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(null);
    }
  }

  async function resetPassword({ email, code, new_password }) {
    setError(null);
    setLoading('Loading data...');
    try {
      await Auth.forgotPasswordSubmit(email, code, new_password);
      setData(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(null);
    }
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
        forgotPassword,
        resetPassword,
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
