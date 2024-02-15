// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDCWMePGG27ImAlypX_1nfcYdgzxiE2DVA",
  authDomain: "student-base-fc2e1.firebaseapp.com",
  projectId: "student-base-fc2e1",
  storageBucket: "student-base-fc2e1.appspot.com",
  messagingSenderId: "1038844186065",
  appId: "1:1038844186065:web:cff4a36e85a801fa5ae4f0",
  measurementId: "G-79RKFQWNF0",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
  
export default auth;



