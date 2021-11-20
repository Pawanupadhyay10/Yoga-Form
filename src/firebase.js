import firebase from "firebase";
import 'firebase/firestore';

var firebaseApp = firebase.initializeApp({
    // Your firebase credentials
  apiKey: "AIzaSyAXOru0HFPKbaKJnMLKFd3qC_qbXfv2kso",
  authDomain: "react-yoga-form.firebaseapp.com",
  projectId: "react-yoga-form",
  storageBucket: "react-yoga-form.appspot.com",
  messagingSenderId: "32989064490",
  appId: "1:32989064490:web:d53c07b41ea40fcd558253",
  measurementId: "G-BMWVLWVG9Y"
});

var db = firebaseApp.firestore();

export { db };