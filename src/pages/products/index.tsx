import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';

export function Products() {
  // const fetchInventory = async () => {
  //   const inventoryData: any = await API.graphql(
  //     graphqlOperation(listProducts)
  //   );
  //   const { items } = inventoryData.data.listProducts;
  //   console.log('inventory items: ', items);
  //   this.setState({ inventory: items });
  // };

  return <div></div>;
}

export async function getServerSideProps({ req, res }) {
  const fetchProducts = async () => {
    const productsData: any = await API.graphql(graphqlOperation(listProducts));
    const { items } = productsData.data.listProducts;
    console.log('products: ', items);
    return items;
  };

  return { props: { products: fetchProducts } };
}
