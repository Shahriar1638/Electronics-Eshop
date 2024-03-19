// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy-IAlF1grqB0du8DjsKehbguSQlgf2wE",
  authDomain: "simple-eshop-8c4b3.firebaseapp.com",
  projectId: "simple-eshop-8c4b3",
  storageBucket: "simple-eshop-8c4b3.appspot.com",
  messagingSenderId: "126081447031",
  appId: "1:126081447031:web:8e849c4d091c6396b48272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

