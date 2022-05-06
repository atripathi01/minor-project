// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics      