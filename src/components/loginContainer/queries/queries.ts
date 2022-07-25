import { gql } from '@apollo/client';

export const GET_USER_AT_CLIENT = gql`
   query userProvider($email: String!) {
      userProvider(email: $email) {
         email
         ApiKey
      }
   }
`;

export const COMPANY_PROVIDER = gql`
   query getCompanyProvider($identity: String!) {
      getCompanyProvider(identity: $identity) {
         id
         company_identity
         identity_provider
         company_name
         public_keys
      }
   }
`;

export const VALIDATE_COMPANY_TOKEN = gql`
   query validateCompanyToken($payload: String!) {
      validateCompanyToken(payload: $payload) {
         success
         email
         saml {
            group
            role
            access
         }
         token
         refreshToken
         company {
            id
            company_identity
            identity_provider
            company_name
            public_keys
         }
      }
   }
`;
