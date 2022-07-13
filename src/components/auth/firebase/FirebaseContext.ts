import { createContext, useContext } from 'react';
import { FirebaseApp } from 'firebase/app';

export const FirebaseContext = createContext<FirebaseApp | null>(null);

export const useFirebaseContext = () => useContext(FirebaseContext);
