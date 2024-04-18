// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-nextjs-5d4cf.firebaseapp.com",
  projectId: "insta-nextjs-5d4cf",
  storageBucket: "insta-nextjs-5d4cf.appspot.com",
  messagingSenderId: "18162005936",
  appId: "1:18162005936:web:7e85ad3acc38d8cf4b0875"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read: if true;
//       allow write: if 
//       request.resource.size < 2 * 1024 * 1024 &&
//       request.resource.contentType.matches('image/.*');
//     }
//   }
// }