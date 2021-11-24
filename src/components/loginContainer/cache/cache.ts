import { InMemoryCache } from "@apollo/client";
import { localState } from "../state/loginState";

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