
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCVTNa1q1MYUfZb_XudkWfMDIbwfuJQOvw",
  authDomain: "tienda-sofi.firebaseapp.com",
  projectId: "tienda-sofi",
  storageBucket: "tienda-sofi.appspot.com",
  messagingSenderId: "1031466295280",
  appId: "1:1031466295280:web:6c0013ddf6e5944723c735"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
