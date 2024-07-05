
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "challengeapp-1c4f4.firebaseapp.com",
  projectId: "challengeapp-1c4f4",
  storageBucket: "challengeapp-1c4f4.appspot.com",
  messagingSenderId: "695013565144",
  appId: "1:695013565144:web:28bdfea16dedd4fbbbadad"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)