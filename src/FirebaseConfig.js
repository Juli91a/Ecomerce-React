import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCB4j6nFFDjaM50TGnJ2xc1Q6lEindmP-c",
  authDomain: "ecomerce-aguero.firebaseapp.com",
  projectId: "ecomerce-aguero",
  storageBucket: "ecomerce-aguero.appspot.com",
  messagingSenderId: "353858273545",
  appId: "1:353858273545:web:a77eadfb0d4fd1086893d8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
