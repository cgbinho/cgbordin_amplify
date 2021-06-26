import React from 'react';
import { AuthProvider } from './auth';
import { Stripe, loadStripe } from '@stripe/stripe-js';

const AppProvider = ({ children }) => <AuthProvider>{children}</AuthProvider>;

export default AppProvider;
