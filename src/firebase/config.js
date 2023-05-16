// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZniiR3A2EEa-dCk1LziZRx8wbC4waNPM",
  authDomain: "linosweb-b7852.firebaseapp.com",
  databaseURL: "https://linosweb-b7852-default-rtdb.firebaseio.com",
  projectId: "linosweb-b7852",
  storageBucket: "linosweb-b7852.appspot.com",
  messagingSenderId: "714143178191",
  appId: "1:714143178191:web:dc2c91c6198466423c86ba"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export {db};