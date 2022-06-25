import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import 'firebase/compat/storage';






const firebaseConfig = {
    apiKey: "AIzaSyCEBMdZQ7NiAYLqUZrxov824reD9EKFSIk",
    authDomain: "linkedin-clone-51e32.firebaseapp.com",
    projectId: "linkedin-clone-51e32",
    storageBucket: "linkedin-clone-51e32.appspot.com",
    messagingSenderId: "222916978198",
    appId: "1:222916978198:web:db0c57a65490f34cd8b737",
    measurementId: "G-4YDQ8QDYPK"
};




const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, storage, provider };
export default db