import { useQuery } from 'react-query';
import axios from '../helpers/axios';

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
