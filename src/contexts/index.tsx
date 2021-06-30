import React from 'react';
import { AuthProvider } from './auth';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

const AppProvider = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  </>
);

export default AppProvider;
