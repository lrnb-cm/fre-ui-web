import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default async (firebaseConfig: string, credentials: any) => {
   const app = initializeApp(JSON.parse(firebaseConfig));
   const auth = getAuth(app);
   const db = getFirestore(app);
   // console.log('firebaseConfig', firebaseConfig);
   try {
      //1. pass login credentials to autheticate users
      const { user } = await signInWithEmailAndPassword(
         auth,
         credentials.email,
         credentials.password
      );
      // console.log('user', user);

      //   const idToken = await user.getIdToken();

      //2. get user SAML/profile access details
      const userRef = doc(db, `users/`, `${user?.uid}`);
      const snapshot = await getDoc(userRef);
      const userT: any = user;
      return {
         token: userT?.accessToken,
         email: userT?.email,
         saml: snapshot.data(),
      };
   } catch (err) {
      return err;
   }
};
