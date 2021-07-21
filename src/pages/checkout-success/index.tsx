import { GetServerSideProps, NextPage } from 'next';

import PrintObject from '../../components/PrintObject';

import {
  getStripeSession,
  useStripeSession,
} from '../../hooks/useStripeSession';
import Stripe from 'stripe';
import React from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { Container } from '../../styles/home';
import { SuccessCard } from '../../components/Orders/SuccessCard';
import { EmptyCard } from '../../components/Orders/EmptyCard';

interface PropsData {
  session: any;
  content: any;
}

const ResultPage: NextPage<PropsData> = ({ session, content }: PropsData) => {
  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - {content.title}</title>
      </Head>
      <Container>
        <div className="content">
          {!session && <EmptyCard {...{ content }} />}
          {session && <SuccessCard {...{ content }} />}
        </div>
      </Container>
    </Layout>
  );
};

export default ResultPage;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
}) => {
  const session_id = query?.session_id;

  if (!session_id) {
    return { props: { session_id: null } };
  }

  const data = await getStripeSession(session_id);

  const content = (await import(`../../locales/${locale}/checkout_success.js`))
    .default;

  return {
    props: {
      session: data,
      content,
    },
  };
};

/* 
{
  "id": "cs_test_a1Hw4ZFtupInZU1YzNspPASaGkkTcx8CNueIhODERIOdIkDPajjUtU14KJ",
  "object": "checkout.session",
  "allow_promotion_codes": null,
  "amount_subtotal": 6900,
  "amount_total": 6900,
  "automatic_tax": {
    "enabled": false,
    "status": null
  },
  "billing_address_collection": null,
  "cancel_url": "http://localhost:3000/checkout",
  "client_reference_id": null,
  "currency": "brl",
  "customer": "cus_Jk75BAGGY4jb26",
  "customer_details": {
    "email": "cgbordin@gmail.com",
    "tax_exempt": "none",
    "tax_ids": []
  },
  "customer_email": null,
  "livemode": false,
  "locale": null,
  "metadata": {},
  "mode": "payment",
  "payment_intent": {
    "id": "pi_1J6cr2C6zdhBSwU36BFEnL64",
    "object": "payment_intent",
    "amount": 6900,
    "amount_capturable": 0,
    "amount_received": 6900,
    "application": null,
    "application_fee_amount": null,
    "canceled_at": null,
    "cancellation_reason": null,
    "capture_method": "automatic",
    "charges": {
      "object": "list",
      "data": [
        {
          "id": "ch_1J6crHC6zdhBSwU3c9jozi7u",
          "object": "charge",
          "amount": 6900,
          "amount_captured": 6900,
          "amount_refunded": 0,
          "application": null,
          "application_fee": null,
          "application_fee_amount": null,
          "balance_transaction": "txn_1J6crIC6zdhBSwU3RUSKa0VE",
          "billing_details": {
            "address": {
              "city": null,
              "country": "BR",
              "line1": null,
              "line2": null,
              "postal_code": null,
              "state": null
            },
            "email": "cgbordin@gmail.com",
            "name": "asdasdasd",
            "phone": null
          },
          "calculated_statement_descriptor": "WWW.CGBORDIN.COM",
          "captured": true,
          "created": 1624719107,
          "currency": "brl",
          "customer": "cus_Jk75BAGGY4jb26",
          "description": null,
          "destination": null,
          "dispute": null,
          "disputed": false,
          "failure_code": null,
          "failure_message": null,
          "fraud_details": {},
          "invoice": null,
          "livemode": false,
          "metadata": {},
          "on_behalf_of": null,
          "order": null,
          "outcome": {
            "network_status": "approved_by_network",
            "reason": null,
            "risk_level": "normal",
            "risk_score": 54,
            "seller_message": "Payment complete.",
            "type": "authorized"
          },
          "paid": true,
          "payment_intent": "pi_1J6cr2C6zdhBSwU36BFEnL64",
          "payment_method": "pm_1J6crGC6zdhBSwU3LMj8opQt",
          "payment_method_details": {
            "card": {
              "brand": "visa",
              "checks": {
                "address_line1_check": null,
                "address_postal_code_check": null,
                "cvc_check": "pass"
              },
              "country": "US",
              "exp_month": 12,
              "exp_year": 2031,
              "fingerprint": "DHBieXrUidp0MLy8",
              "funding": "credit",
              "installments": null,
              "last4": "4242",
              "network": "visa",
              "three_d_secure": null,
              "wallet": null
            },
            "type": "card"
          },
          "receipt_email": null,
          "receipt_number": null,
          "receipt_url": "https://pay.stripe.com/receipts/acct_1J4t6KC6zdhBSwU3/ch_1J6crHC6zdhBSwU3c9jozi7u/rcpt_Jk75qFiMAUg2wHNxkhHFCMa6KoGOCXn",
          "refunded": false,
          "refunds": {
            "object": "list",
            "data": [],
            "has_more": false,
            "total_count": 0,
            "url": "/v1/charges/ch_1J6crHC6zdhBSwU3c9jozi7u/refunds"
          },
          "review": null,
          "shipping": null,
          "source": null,
          "source_transfer": null,
          "statement_descriptor": null,
          "statement_descriptor_suffix": null,
          "status": "succeeded",
          "transfer_data": null,
          "transfer_group": null
        }
      ],
      "has_more": false,
      "total_count": 1,
      "url": "/v1/charges?payment_intent=pi_1J6cr2C6zdhBSwU36BFEnL64"
    },
    "client_secret": "pi_1J6cr2C6zdhBSwU36BFEnL64_secret_8fh5xyQ0BacMeI1fYUG8t9ryj",
    "confirmation_method": "automatic",
    "created": 1624719092,
    "currency": "brl",
    "customer": "cus_Jk75BAGGY4jb26",
    "description": null,
    "invoice": null,
    "last_payment_error": null,
    "livemode": false,
    "metadata": {},
    "next_action": null,
    "on_behalf_of": null,
    "payment_method": "pm_1J6crGC6zdhBSwU3LMj8opQt",
    "payment_method_options": {
      "card": {
        "installments": null,
        "network": null,
        "request_three_d_secure": "automatic"
      }
    },
    "payment_method_types": [
      "card"
    ],
    "receipt_email": null,
    "review": null,
    "setup_future_usage": null,
    "shipping": null,
    "source": null,
    "statement_descriptor": null,
    "statement_descriptor_suffix": null,
    "status": "succeeded",
    "transfer_data": null,
    "transfer_group": null
  },
  "payment_method_options": {},
  "payment_method_types": [
    "card"
  ],
  "payment_status": "paid",
  "setup_intent": null,
  "shipping": null,
  "shipping_address_collection": null,
  "submit_type": null,
  "subscription": null,
  "success_url": "http://localhost:3000/checkout/result?session_id={CHECKOUT_SESSION_ID}",
  "total_details": {
    "amount_discount": 0,
    "amount_shipping": 0,
    "amount_tax": 0
  },
  "url": null
}
*/
