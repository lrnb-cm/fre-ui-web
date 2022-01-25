import { gql } from "@apollo/client";

export const GET_SCORES = gql`
  query {
    getScores(apiKey: "<APIKEY>") {
      id
    }
  }
`;
export const GET_SCORES_PLUS_CLIENT = gql`
  query {
    getScores(apiKey: "<APIKEY>") {
      id @client
    }
  }
`;
