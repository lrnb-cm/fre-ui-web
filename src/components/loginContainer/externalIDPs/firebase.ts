import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default async (firebaseConfig: string, credentials: any) => {
   const app = initializeApp(JSON.parse(firebaseConfig));
   const auth = getAuth(app);
   const db = getFirestore(app);

   try {
      //1. pass login credentials to autheticate users
      const { user } = await signInWithEmailAndPassword(
         auth,
         credentials.email,
         credentials.password
      );
      //   const idToken = await user.getIdToken();

      //2. get user SAML/profile access details
      const userRef = doc(db, `users/`, `${user?.uid}`);
      const snapshot = await getDoc(userRef);

      return {
         ...snapshot.data(),
         ...user,
      };
   } catch (err) {
      return err;
   }
};
