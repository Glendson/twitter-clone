import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBI_FUTtS5oZrQKe5qYhjlymXRqpxo-MrY",
    authDomain: "twitter-clone-95b4a.firebaseapp.com",
    projectId: "twitter-clone-95b4a",
    storageBucket: "twitter-clone-95b4a.appspot.com",
    messagingSenderId: "713701639187",
    appId: "1:713701639187:web:13b5bd7443539db20e6be6"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };