import { createContext, useContext } from 'react';

// Todo: strongly type the user context
export const AuthContext = createContext<any | null>(null);

export const useAuthContext = () => useContext(AuthContext);
