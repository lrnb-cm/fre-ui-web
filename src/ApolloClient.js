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
   const token =
      JSON.parse(sessionStorage.getItem('lilli_user'))?.token || null;
   const refreshToken =
      JSON.parse(sessionStorage.getItem('lilli_user'))?.refreshToken || null;

   console.log('context', token, refreshToken);

   return {
      headers: {
         ...headers,
         'x-access-token': `Bearer ${token}`,
         'x-refresh-token': refreshToken,
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
