import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { uri } from './config';

const httpLink = new HttpLink({
  uri,
});

const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation }) => {
    if (graphQLErrors) {
      console.log(graphQLErrors, 'graphQLErrors in errorLink');
    }
    if (networkError) {
      console.log(networkError, 'networkError in errorLink');
    }
    forward(operation);
  }
);

const authLink = setContext((_, { headers, ...context }) => {
  const idToken = context.idToken || localStorage.getItem('idToken');
  console.log(idToken, 'idToken in authLink');
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${idToken}`,
    },
    ...context,
  };
});

// Setup Apollo Client
export default new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  uri,
  cache: new InMemoryCache(),
});
