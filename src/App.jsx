import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import * as dotenv from 'dotenv';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_IDD,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const username = form.elements.username.value;
    const password = form.elements.password.value;

    // Store the values in Firebase Firestore
    firebase.firestore().collection('users').add({
      name,
      username,
      password,
    });

    // Redirect to the login page or any other desired location
    // You can use react-router-dom's useHistory hook for redirection
  };
    return (
      <>
        <div className="register-container">
          <title>Registration Form</title>
          <h2 className="form-heading">Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="reg">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
              <label htmlFor="UserName">UserName:</label>
              <input
                type="text"
                id="username"
                name="UserName"
                placeholder="Enter your E-mail address"
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <div className="input-submit">
                
                  <button>Register</button>
                
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
  
  

function Some() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.elements.username.value;
    const password = form.elements.password.value;

    // Fetch the username from Firebase Firestore and check its correctness
    firebase
      .firestore()
      .collection('users')
      .where('username', '==', username)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          // Username not found
          console.log('Invalid username');
        } else {
          // Username found, do further validation or login logic
          console.log("Right")
        }
      })
      .catch((error) => {
        console.log('Error fetching username:', error);
      });
  };
  return (
    <>
      <title>Login Page</title>
      <link rel="stylesheet" type="text/css" href="styles.css" />
      <div className="container">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-submit">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required="" />
            </div>
            <div className="input-submit">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required="" />
            </div>
            <div className="input-submit">
              <button type="submit" className="submit-login">Login</button>
            </div>
            <div className="input-submit">
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Some />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

