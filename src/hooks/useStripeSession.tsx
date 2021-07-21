import { useQuery } from 'react-query';
import axios from '../helpers/axios';

interface IQuery {
  session_id: string;
}

export const getStripeSession = async (session_id: any) => {
  // console.log({ session_id });
  const { data } = await axios.get(
    `/api/checkout_session/cs_test_a1Hw4ZFtupInZU1YzNspPASaGkkTcx8CNueIhODERIOdIkDPajjUtU14KJ`
  );

  return data;
};

export const useStripeSession = (session_id: any) => {
  return useQuery<any, Error>(session_id, getStripeSession);
};
