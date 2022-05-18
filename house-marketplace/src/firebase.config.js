import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyByYYYeZUVmcF2xT_eLETzADb7gWWt1hOk",
  authDomain: "house-market-place-app-507e0.firebaseapp.com",
  projectId: "house-market-place-app-507e0",
  storageBucket: "house-market-place-app-507e0.appspot.com",
  messagingSenderId: "945897664717",
  appId: "1:945897664717:web:fd498aee57ee94dc0a7984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()