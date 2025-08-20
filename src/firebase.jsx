import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC6pgoQfR4aEbOovp0IYUzMAkeeyNycVsk",
    authDomain: "loginsignupform-c21a7.firebaseapp.com",
    projectId: "loginsignupform-c21a7",
    storageBucket: "loginsignupform-c21a7.firebasestorage.app",
    messagingSenderId: "4112726702",
    appId: "1:4112726702:web:b1d6f8c36e2012932a0b3f"
  };
  
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);