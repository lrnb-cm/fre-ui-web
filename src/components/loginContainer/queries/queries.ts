import { gql } from "@apollo/client";

export const GET_USER_AT_CLIENT = gql`
  query userProvider ($email: String!) {
    userProvider(email: $email) {
      email
      ApiKey
    }
  }
`;
