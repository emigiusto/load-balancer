import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase')
require('firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyCww5j1vlJCTHwE-zDAadKjYTwDjFvxLBI",
    authDomain: "load-balancer-59c48.firebaseapp.com",
    databaseURL: "https://load-balancer-59c48.firebaseio.com",
    projectId: "load-balancer-59c48",
    storageBucket: "load-balancer-59c48.appspot.com",
    messagingSenderId: "842465811688",
    appId: "1:842465811688:web:70878da44975c42001bd5d",
    measurementId: "G-G5XWN9FZ5P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
