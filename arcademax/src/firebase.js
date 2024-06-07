// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt30dz9y6AJN9btrnmIGfA2Yje-12qMcM",
  authDomain: "arcademax.firebaseapp.com",
  projectId: "arcademax",
  storageBucket: "arcademax.appspot.com",
  messagingSenderId: "21797841508",
  appId: "1:21797841508:web:d9e267dbc9ab32178c8d71",
  measurementId: "G-JCMWW1X6ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
export default app;

