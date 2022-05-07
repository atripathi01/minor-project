import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCVE9aD7SlC9pMhzytTz5eSUK-UCPYuxHo",
  authDomain: "minor-project-rec.firebaseapp.com",
  projectId: "minor-project-rec",
  storageBucket: "minor-project-rec.appspot.com",
  messagingSenderId: "524838340798",
  appId: "1:524838340798:web:6d2ef0af416c1e164cb6ef",
  measurementId: "G-M9EM3CE7YC"
};

// Initialize Firebase

const app =initializeApp(firebaseConfig);
// const fire = getAnalytics(app);
export  const auth = getAuth(app);
  