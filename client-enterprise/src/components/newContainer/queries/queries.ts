import { gql } from "@apollo/client";

export const GET_NEW = gql`
  query GetNew {
    newStates @client {
      id
      title
      description
    }
  }
`;
export const GET_NEW_PLUS_CLIENT = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
      local @client
    }
  }
`;
