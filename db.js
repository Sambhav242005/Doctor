import { initializeApp, getApps, getApp } from "firebase/app";  



const firebaseConfig = {
  apiKey: process.env.YOUR_AUTH_DOMAIN,
  authDomain:process.env.YOUR_API_KEY ,
  projectId:process.env.YOUR_PROJECT_ID,
  databaseURL:process.env.YOUR_DATABASE_URL,
  storageBucket: process.env.YOUR_STORAGE_BUCKET,
  messagingSenderId: process.env.YOUR_MESSAGING_SENDER_ID,
  appId: process.env.YOUR_APP_ID,
  measurementId:process.env.MEASUREMENT_ID
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;