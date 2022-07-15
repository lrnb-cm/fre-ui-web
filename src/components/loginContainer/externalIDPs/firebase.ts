import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default async (firebaseConfig: string, credentials: any) => {
   const app = initializeApp(JSON.parse(firebaseConfig));
   const auth = getAuth(app);
   try {
      //1. pass login credentials to autheticate users
      const data = await signInWithEmailAndPassword(
         auth,
         credentials.email,
         credentials.password
      );

      //2. get user SAML/profile access details
      return data;
   } catch (err) {
      return err;
   }
};
