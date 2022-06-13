import { gql } from "@apollo/client";

const GET_USER_DATA = gql`
  query getUser($filters: UserInputType!) {
    getUser(filters: $filters) {
      first_name
      last_name
      email
      roles {
        name
        permissions {
          name
        }
      }
      groups {
        name
        roles {
          name
          permissions {
            name
          }
        }
      }
    }
  }
`;

export default GET_USER_DATA;
