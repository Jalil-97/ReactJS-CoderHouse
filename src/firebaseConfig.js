import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 


const firebaseConfig = {
  apiKey: "AIzaSyAYtoBhu2qOFVu2soJM7ggnPQ3lDR_hhSk",
  authDomain: "padel-store-aa7d9.firebaseapp.com",
  projectId: "padel-store-aa7d9",
  storageBucket: "padel-store-aa7d9.firebasestorage.app",
  messagingSenderId: "661816689276",
  appId: "1:661816689276:web:ac4ac19d0fc82184fc3ff9"
};





const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)









