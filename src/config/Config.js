import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8E01kMh7TjLNZTTPErsrSfYsmt9HfXdE",
  authDomain: "ecoshopreact.firebaseapp.com",
  projectId: "ecoshopreact",
  storageBucket: "ecoshopreact.appspot.com",
  messagingSenderId: "65623130433",
  appId: "1:65623130433:web:0ae7a7ab21054cb74961c0",
  measurementId: "G-Y8E2ESF44X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);