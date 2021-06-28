import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import PrintObject from '../../components/PrintObject';

import { fetchGetJSON } from '../../helpers/api';
import useSWR from 'swr';
import {
  getStripeSession,
  useStripeSession,
} from '../../hooks/useStripeSession';
import Stripe from 'stripe';

interface PropsData {
  session: any;
}

const ResultPage: NextPage<PropsData> = ({ session }: PropsData) => {
  return (
    <div>
      <div className="page-container">
        <h1>Checkout Payment Result</h1>
        {!session && <div>No checkout information.</div>}
        {session && <PrintObject content={session ?? 'loading...'} />}
      </div>
    </div>
  );
};

export default ResultPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const session_id = query?.session_id;

  if (!session_id) {
    return { props: { session_id: null } };
  }

  const data = await getStripeSession(session_id);

  return {
    props: {
      session: data,
    },
  };
};
