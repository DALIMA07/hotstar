import firebase from 'firebase'
require('firebase/auth');
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "@firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA6Cx7m5Dq1-MmQUHeGwdfdzHsC3G66Tgc",
  authDomain: "hotstar-clone-82684.firebaseapp.com",
  projectId: "hotstar-clone-82684",
  storageBucket: "hotstar-clone-82684.appspot.com",
  messagingSenderId: "937942628974",
  appId: "1:937942628974:web:dc7c811e0dce375f30c47f",
  measurementId: "G-2F2JDKM5K6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export {auth, provider, storage};
export default db;



// Reducx helps to store info so that we can use it later.
