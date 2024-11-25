import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBI7fRunbHBRrODYKTMr21QahPDWyo6flQ",
  authDomain: "react-blog-51258.firebaseapp.com",
  projectId: "react-blog-51258",
  storageBucket: "react-blog-51258.firebasestorage.app",
  messagingSenderId: "640781968064",
  appId: "1:640781968064:web:be9ae7eb5f1c1788c28325"
};

const app = initializeApp(firebaseConfig);

export default app;