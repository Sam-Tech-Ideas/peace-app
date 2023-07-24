// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzH-VRD8u3PnNdMT6skAy4sDEDmWXFTK0",
  authDomain: "peaceful-d5db9.firebaseapp.com",
  projectId: "peaceful-d5db9",
  storageBucket: "peaceful-d5db9.appspot.com",
  messagingSenderId: "747795233103",
  appId: "1:747795233103:web:845fe6cf8f922856c86d3a",
  measurementId: "G-K14F2WH4FY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
