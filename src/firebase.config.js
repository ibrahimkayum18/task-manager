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
  appId: "1:53888502355:web:4f4dafdc5170498b1654a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDuqoNOkhCMMvl86EoJs-y_EIjF-cJLZiw",
//   authDomain: "made-it-ae671.firebaseapp.com",
//   projectId: "made-it-ae671",
//   storageBucket: "made-it-ae671.appspot.com",
//   messagingSenderId: "958867952832",
//   appId: "1:958867952832:web:390b0938646206d07c0925",
//   measurementId: "G-PLVWJXE0J2",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAnalytics(app);
export default auth;
