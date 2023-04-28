// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1mGs3NPCj4gpmv5zaFbAeVfHKnxPcteQ",
  authDomain: "dragon-news-projects.firebaseapp.com",
  projectId: "dragon-news-projects",
  storageBucket: "dragon-news-projects.appspot.com",
  messagingSenderId: "363832566287",
  appId: "1:363832566287:web:02bfc69b7204ce5afd797a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app