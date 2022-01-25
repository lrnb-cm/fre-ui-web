import { gql } from "@apollo/client";

export const OIDC_LOGIN = gql`
  mutation loginProvider ($provider: String!, $payload: String!) {
    loginProvider(provider: $provider, payload: $payload) {
    # {
    #   login_hint: "awalker@lilliirnb.com",
    #   scope: "openid profile email",
    #   redirect_uri: "http://localhost:3000/oauth_callback",
    #   prompt: "consent",
    #   state: "google"
    # }) {
      url
      ApiKey
      email
    }
  } 
`;