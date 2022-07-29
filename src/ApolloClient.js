import {
   ApolloClient,
   from,
   HttpLink,
   InMemoryCache,
   ApolloLink,
} from '@apollo/client';
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
   const user = sessionStorage.getItem('lilli_user');

   if (!user) {
      return {
         headers,
         ...context,
      };
   }
   const token = JSON.parse(user)?.token || null;
   const refreshToken = JSON.parse(user)?.refreshToken || null;

   return {
      headers: {
         ...headers,
         'x-access-token': token,
         'x-refresh-token': refreshToken,
      },
      ...context,
   };
});

const afterwareLink = new ApolloLink((operation, forward) => {
   return forward(operation).map((response) => {
      const context = operation.getContext();

      const {
         response: { headers },
      } = context;

      if (headers) {
         const user = sessionStorage.getItem('lilli_user');
         if (user) {
            const userParsed = JSON.parse(user);
            const token = headers.get('x-access-token') || null;
            const refreshToken = headers.get('x-refresh-token') || null;

            if (
               token !== 'undefined' &&
               token !== null &&
               token !== undefined
            ) {
               userParsed.token = token;
            }

            if (
               refreshToken !== 'undefined' &&
               refreshToken !== null &&
               refreshToken !== undefined
            ) {
               userParsed.refreshToken = refreshToken;
            }
            //store session user
            sessionStorage.setItem('lilli_user', JSON.stringify(userParsed));
         }
      }

      return response;
   });
});

// Setup Apollo Client
export default new ApolloClient({
   link: from([authLink, errorLink, afterwareLink.concat(httpLink)]),
   uri,
   cache: new InMemoryCache(),
});
