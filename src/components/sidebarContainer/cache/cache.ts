import { InMemoryCache } from '@apollo/client';
import { sidebarVar } from '../state/sidebarState';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        sidebar: {
          read() {
            return sidebarVar();
          },
        },
      },
    },
  },
});
