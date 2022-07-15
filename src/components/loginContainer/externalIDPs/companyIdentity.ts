import firebase from './firebase';

export default async (identity: any, credentials: any) => {
   switch (identity.identity_provider) {
      case 'firebase':
         const data = await firebase(identity.public_keys, credentials);
         return data;

      default:
         break;
   }
};
