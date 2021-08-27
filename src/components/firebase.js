import * as firebase from "firebase";
import "firebase/firestore";

const firebaseApp  = firebase.initializeApp({
  apiKey: "AIzaSyBjyMRNIesXI6ljo8gCOra-Xj8skBN6KMY",
  authDomain: "messangerapp-7a693.firebaseapp.com",
  databaseURL: "https://messangerapp-7a693-default-rtdb.firebaseio.com",
  projectId: "messangerapp-7a693",
  storageBucket: "messangerapp-7a693.appspot.com",
  messagingSenderId: "446090942754",
  appId: "1:446090942754:web:bed8a5a75ca4c39d3dad7b",
  measurementId: "G-NTGNY66357"
});

export const db = firebaseApp.firestore()

export default db;