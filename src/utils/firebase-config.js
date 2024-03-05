import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB8-HKPxrYjjoyOQaTqZvGdIYWIs9diT7M",
  authDomain: "netflix-clone-project-28976.firebaseapp.com",
  projectId: "netflix-clone-project-28976",
  storageBucket: "netflix-clone-project-28976.appspot.com",
  messagingSenderId: "453489947341",
  appId: "1:453489947341:web:3cb3fe7730b8a5f6182f84",
  measurementId: "G-4B0XKF3HYE",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
