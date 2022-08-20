import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import App from './App'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyDt-AbQZZ7TC18ofZ7Q3FTQxKrO_kN7nEE", 
  authDomain: "coderhouse-ecommerce34690.firebaseapp.com",
  projectId: "coderhouse-ecommerce34690",
  storageBucket: "coderhouse-ecommerce34690.appspot.com",
  messagingSenderId: "654962489170",
  appId: "1:654962489170:web:a9a3b6f1e8378dd9386c8b"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment> 
    <App />
  </React.Fragment> 
  )
