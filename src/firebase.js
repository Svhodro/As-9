// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg3c80hHHWXH3jQ8JMJJdZi4HVIWA7XPI",
  authDomain: "as-9-21497.firebaseapp.com",
  projectId: "as-9-21497",
  storageBucket: "as-9-21497.appspot.com",
  messagingSenderId: "936195121951",
  appId: "1:936195121951:web:50dd2a3b1944b7fd09862a",
  measurementId: "G-CQSDFP45TX",
  databaseURL: "https://as-9-21497-default-rtdb.firebaseio.com/",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app