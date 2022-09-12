import { initializeApp } from "firebase/app";

import { getFirestore, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPmHvocuY0yjvvLColpzw36yOkC_R3OY4",
  authDomain: "chat-app-0830.firebaseapp.com",
  projectId: "chat-app-0830",
  storageBucket: "chat-app-0830.appspot.com",
  messagingSenderId: "999435459822",
  appId: "1:999435459822:web:6640800bfeb2fe88abe7ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(firebase);

// const db = getFirestore();
const firebaseTimeStamp = Timestamp;

export { db, firebaseTimeStamp };
