import { useQuery } from 'react-query';
import axios from '../helpers/axios';

interface IQuery {
  currency: string;
  product?: string;
}

const getProducts = async ({ currency = null, product = null }: IQuery) => {
  // get all stripe products from currency

  const query = currency ? `/api/products/${currency}` : `/api/products`;

  const { data } = await axios.get(query);
  // if product, get only this product:
  if (product) {
    const pricesData = data.filter(
      (price) => price.product.name === product
    )[0];
    return pricesData;
  }
  return data;
};

export function useProducts({ currency, product }: IQuery) {
  return useQuery(
    ['products', currency],
    () => getProducts({ currency, product }),
    { refetchOnWindowFocus: false }
  );
}
