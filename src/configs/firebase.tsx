// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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


const vu = " viet duy"
const array = [
  1,2,3,4,5,6,5
]

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(array)
}