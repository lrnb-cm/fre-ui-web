import { useEffect, useState, ReactNode } from 'react';
import { AuthContext } from './AuthContext';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      const token = sessionStorage.getItem('token') || '';

      try {
        if (token !== '') {
          //get user and user token
          /**
           * @todo // once authentication flow is finalized and also keep williams code for future reference regarding permissions
           */
          setUser(null);
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
        authenticated: user !== null,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
