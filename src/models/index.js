// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Customer, Order, OrderItem, Product } = initSchema(schema);

export {
  Todo,
  Customer,
  Order,
  OrderItem,
  Product
};