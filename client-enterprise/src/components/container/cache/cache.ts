import { InMemoryCache } from "@apollo/client";
import { localState } from "../state/state";

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                rates: {
                    read() {
                        return localState();
                    }
                }
            }
        }
    }
});