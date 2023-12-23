// File firebase.js
import { initializeApp, FirebaseOptions } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
