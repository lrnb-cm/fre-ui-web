import { gql } from "@apollo/client";

export const POST_TRANSACTION = gql`
    mutation {
        postTransaction(apiKey: "<APIKEY>", payload: [
            {
            
            },
            {
            
            }
        ]) 
    }
`;
