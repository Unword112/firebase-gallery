import * as firebase from 'firebase'
import { initializeApp } from "firebase/app";

import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN2h_dNJ-byGPjw0Is--7WrJOQxcW8N2U",
  authDomain: "firegram-85c15.firebaseapp.com",
  projectId: "firegram-85c15",
  storageBucket: "firegram-85c15.appspot.com",
  messagingSenderId: "305212702914",
  appId: "1:305212702914:web:976a38a8b10d3e4528bb5b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirebasestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirebasestore, timestamp }