import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBjAjXa1-2yjjxaqV02sP4T1Z8NPvdYUvo",
    authDomain: "uyshoppi-react.firebaseapp.com",
    projectId: "uyshoppi-react",
    storageBucket: "uyshoppi-react.firebasestorage.app",
    messagingSenderId: "601309516277",
    appId: "1:601309516277:web:15675ec3c0ade9109510bc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
