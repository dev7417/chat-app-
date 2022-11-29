// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpSdEC9l54bi17XfNkc1LrH-vcL6QhajY",
  authDomain: "chat-app-5c235.firebaseapp.com",
  projectId: "chat-app-5c235",
  storageBucket: "chat-app-5c235.appspot.com",
  messagingSenderId: "863793608139",
  appId: "1:863793608139:web:a944947737548c6c6f324e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)