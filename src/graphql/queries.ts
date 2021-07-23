/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userID
      userEmail
      product
      code
      amount
      currency
      orderStatus
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        userEmail
        product
        code
        amount
        currency
        orderStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrdersByUserID = /* GraphQL */ `
  query GetOrdersByUserID(
    $userID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrdersByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        userEmail
        product
        code
        amount
        currency
        orderStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
