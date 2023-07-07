// Import the functions you need from the SDKs you need
// Initialize Firebase

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
//import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";








// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-TIyFCb6JGdEUR-Xz3PCqoKvhnb3vyYc",
  authDomain: "disney-clone-8d1c7.firebaseapp.com",
  projectId: "disney-clone-8d1c7",
  storageBucket: "disney-clone-8d1c7.appspot.com",
  messagingSenderId: "564120857390",
  appId: "1:564120857390:web:8beee1914766176b5de8bf"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
// Initialize Firebase








const firebaseApp = initializeApp(firebaseConfig)

 const auth = getAuth(firebaseApp);

 const db = getFirestore(firebaseApp);

 const storage = getStorage(firebaseApp);

const provider = new GoogleAuthProvider(firebaseApp);


export { auth, storage, provider };
export default db;