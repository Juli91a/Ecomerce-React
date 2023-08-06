import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.APIKEY,
  authDomain: import.meta.env.AUTHDOMAIN,
  projectId: import.meta.env.PROJECID,
  storageBucket: import.meta.env.STORAGEBUCKET,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID,
  appId: import.meta.env.APPID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
