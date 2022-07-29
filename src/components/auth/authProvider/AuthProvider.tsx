import { useEffect, useState, ReactNode } from 'react';
import { AuthContext } from './AuthContext';

export default function AuthProvider({ children }: { children: ReactNode }) {
   const [user, setUser] = useState<any | null>(null);
   const userData = sessionStorage.getItem('lilli_user') || '';

   useEffect(() => {
      (async () => {
         try {
            if (userData !== '') {
               //get user and user token
               setUser(JSON.parse(userData));
            } else {
               //if no token setuser null
               setUser(null);
            }
         } catch (error) {
            setUser(null);
         }
      })();

      // eslint-disable-next-line
   }, []);

   return (
      <AuthContext.Provider
         value={{
            user,
            authenticated: userData !== null,
            setUser,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
}
