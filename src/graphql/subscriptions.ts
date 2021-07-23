/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($userID: String) {
    onCreateOrder(userID: $userID) {
      id
      userID
      userEmail
      product
      code
      amount
      currency
      orderStatus
      createdOn
      updatedOn
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($userID: String) {
    onUpdateOrder(userID: $userID) {
      id
      userID
      userEmail
      product
      code
      amount
      currency
      orderStatus
      createdOn
      updatedOn
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($userID: String) {
    onDeleteOrder(userID: $userID) {
      id
      userID
      userEmail
      product
      code
      amount
      currency
      orderStatus
      createdOn
      updatedOn
      createdAt
      updatedAt
    }
  }
`;
