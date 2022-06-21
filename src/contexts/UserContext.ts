import { createContext, useContext } from "react";

// Todo: strongly type the user context
export const UserContext = createContext<any | null>(null);

export const useUserContext = () => useContext(UserContext);
