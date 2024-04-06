import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCY9hyQjab53Edctmu4F4_qGtwX5wdQ_Fc",
  authDomain: "portfolio-c9212.firebaseapp.com",
  projectId: "portfolio-c9212",
  storageBucket: "portfolio-c9212.appspot.com",
  messagingSenderId: "677176496573",
  appId: "1:677176496573:web:aff830f05cb050c4b942d4",
  measurementId: "G-E02JYMZQH4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);