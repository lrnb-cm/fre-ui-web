import { InMemoryCache } from "@apollo/client";
import { localState } from "../state/loginState";

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Mutation: {
            fields: {
                login: {
                    merge(_, data, { cache }) {
                      cache.modify({
                        fields: {
                          login() {
                            return data
                          },
                        }
                      })
                    },
                },
            }
        },
        Query: {
            fields: {
                user: {
                    read() {
                        return localState();
                    }
                }
            }
        }
    }
});