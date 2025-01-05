import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AuthProvider } from "./AuthContext";

//require('dotenv').config();

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "authmediapipe.firebaseapp.com",
  projectId: "authmediapipe",
  storageBucket: "authmediapipe.firebasestorage.app",
  messagingSenderId: "1046631219902",
  appId: "1:1046631219902:web:403f4c62cd3c29b3ec94ef",
  measurementId: "G-YBMLTP72CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
