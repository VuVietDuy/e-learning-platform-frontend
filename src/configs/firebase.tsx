import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "e-learning-platform-b7fea.firebaseapp.com",
  projectId: "e-learning-platform-b7fea",
  storageBucket: "e-learning-platform-b7fea.appspot.com",
  messagingSenderId: "1055713884131",
  appId: "1:1055713884131:web:7c6520450dfe5cf09a12d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
  db
}
