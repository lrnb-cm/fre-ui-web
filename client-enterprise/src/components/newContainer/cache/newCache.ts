import { InMemoryCache, useReactiveVar } from "@apollo/client";
import { newLocalstate } from "../state/newState";

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                local: {
                    read() {
                        return newLocalstate();
                    }
                }
            }
        }
    }
});