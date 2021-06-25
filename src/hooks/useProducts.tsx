import { useQuery } from 'react-query';
import { appUrl, fetchGetJSON } from '../helpers/api';
import axios from 'axios';

interface IQuery {
  id?: string;
}
export const getProducts = async () => {
  const { data } = await axios.get('/api/products');
  return data;
};

export const useProducts = () => {
  return useQuery<any, Error>('products', getProducts);
};
