import { createContext, useContext } from 'react'

export const AuthContext = createContext<any | null>(null)

export const useAuthContext = () => useContext(AuthContext)
