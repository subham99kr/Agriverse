import "firebase/auth";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBm5VJK7bvh18rpt4CM9wiOwuLZJNu3lfM",
  authDomain: "webgriphunters-117f8.firebaseapp.com",
  projectId: "webgriphunters-117f8",
  storageBucket: "webgriphunters-117f8.appspot.com",
  messagingSenderId: "500284906679",
  appId: "1:500284906679:web:4ad631b869a47809990132",
  measurementId: "G-7D1JR98FWQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
