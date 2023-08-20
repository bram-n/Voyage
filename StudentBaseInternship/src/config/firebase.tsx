// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDCWMePGG27ImAlypX_1nfcYdgzxiE2DVA",
  authDomain: "student-base-fc2e1.firebaseapp.com",
  projectId: "student-base-fc2e1",
  storageBucket: "student-base-fc2e1.appspot.com",
  messagingSenderId: "1038844186065",
  appId: "1:1038844186065:web:cff4a36e85a801fa5ae4f0",
  measurementId: "G-79RKFQWNF0",
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

