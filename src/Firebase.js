import "firebase/auth";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBNau0SWptZw81XgGRWPwjtVE3ys8yH5Qg",
  authDomain: "agriverse-personal.firebaseapp.com",
  projectId: "agriverse-personal",
  storageBucket: "agriverse-personal.firebasestorage.app",
  messagingSenderId: "623033085774",
  appId: "1:623033085774:web:474fe6162fc54a96c0f81f",
  measurementId: "G-H3GD6J08DF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };


