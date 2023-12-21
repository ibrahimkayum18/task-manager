// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfHGsOgMfAb4yX_nK1CrTtS5qXU9jJhko",
  authDomain: "task-manager-a7d24.firebaseapp.com",
  projectId: "task-manager-a7d24",
  storageBucket: "task-manager-a7d24.appspot.com",
  messagingSenderId: "53888502355",
  appId: "1:53888502355:web:4f4dafdc5170498b1654a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;