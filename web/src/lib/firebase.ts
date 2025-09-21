import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDafnkBIBnSI0feVVJstJ4KQUz_6KGHOBY",
  authDomain: "viral-app-472520.firebaseapp.com",
  projectId: "viral-app-472520",
  storageBucket: "viral-app-472520.firebasestorage.app",
  messagingSenderId: "1026329115907",
  appId: "1:1026329115907:web:80b2b4d3a32c12de4a7d36",
  measurementId: "G-F88LP4SVQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Initialize Analytics
export const analytics = getAnalytics(app);

export default app;