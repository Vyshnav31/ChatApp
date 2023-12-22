import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCULMDGYlkD4R8jMKJ03AQNAzKe25yXxYM",
  authDomain: "chats-3dcde.firebaseapp.com",
  projectId: "chats-3dcde",
  storageBucket: "chats-3dcde.appspot.com",
  messagingSenderId: "333490217169",
  appId: "1:333490217169:web:da326fc7e36ccb1f2f65f0"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();