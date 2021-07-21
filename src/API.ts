/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrderInput = {
  id?: string | null,
  userID?: string | null,
  userEmail?: string | null,
  product?: string | null,
  code?: string | null,
  amount?: number | null,
  currency?: string | null,
  order_status?: string | null,
};

export type ModelOrderConditionInput = {
  userEmail?: ModelStringInput | null,
  product?: ModelStringInput | null,
  code?: ModelStringInput | null,
  amount?: ModelIntInput | null,
  currency?: ModelStringInput | null,
  order_status?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  userID?: string | null,
  userEmail?: string | null,
  product?: string | null,
  code?: string | null,
  amount?: number | null,
  currency?: string | null,
  order_status?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrderInput = {
  id: string,
  userID?: string | null,
  userEmail?: string | null,
  product?: string | null,
  code?: string | null,
  amount?: number | null,
  currency?: string | null,
  order_status?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  userEmail?: ModelStringInput | null,
  product?: ModelStringInput | null,
  code?: ModelStringInput | null,
  amount?: ModelIntInput | null,
  currency?: ModelStringInput | null,
  order_status?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    userID?: string | null,
    userEmail?: string | null,
    product?: string | null,
    code?: string | null,
    amount?: number | null,
    currency?: string | null,
    order_status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    userID?: string | null,
    userEmail?: string | null,
    product?: string | null,
    code?: string | null,
    amount?: number | null,
    currency?: string | null,
    order_status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    userID?: string | null,
    userEmail?: string | null,
    product?: string | null,
    code?: string | null,
    amount?: number | null,
    currency?: string | null,
    order_status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    userID?: string | null,
    userEmail?: string | null,
    product?: string | null,
    code?: string | null,
    amount?: number | null,
    currency?: string | null,
    order_status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      userID?: string | null,
      userEmail?: string | null,
      product?: string | null,
      code?: string | null,
      amount?: number | null,
      currency?: string | null,
      order_status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrdersByUserIDQueryVariables = {
  userID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetOrdersByUserIDQuery = {
  getOrdersByUserID?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      userID?: string | null,
      userEmail?: string | null,
      product?: string | null,
      code?: string | null,
      amount?: number | null,
      currency?: string | null,
      order_status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  userID?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    userID?: string | null,
    userEmail?: string | null,
    product?: string | null,
    code?: string | null,
    amount?: number | null,
    currency?: string | null,
    order_status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  userID?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    userID?: string | null,
    userEmail?: string | null,
    product?: string | null,
    code?: string | null,
    amount?: number | null,
    currency?: string | null,
    order_status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  userID?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    userID?: string | null,
    userEmail?: string | null,
    product?: string | null,
    code?: string | null,
    amount?: number | null,
    currency?: string | null,
    order_status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
