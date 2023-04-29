import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4rm3ixK4CWRI0On8q5K9zqq5J-Q4RpJs",
  authDomain: "personal-website-8e47c.firebaseapp.com",
  projectId: "personal-website-8e47c",
  storageBucket: "personal-website-8e47c.appspot.com",
  messagingSenderId: "202142518603",
  appId: "1:202142518603:web:5673545895755f14daacce",
  measurementId: "G-WZ7N21FMEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);