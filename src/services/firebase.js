import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDgZovn6B4zxAF5EuboSvOiuZo6dEZigr0",
    authDomain: "proyecto-react-84f3e.firebaseapp.com",
    projectId: "proyecto-react-84f3e",
    storageBucket: "proyecto-react-84f3e.appspot.com",
    messagingSenderId: "161654366657",
    appId: "1:161654366657:web:5c24b700933c0b6bbf0f40",
    measurementId: "G-2XV2VYPRSR"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);