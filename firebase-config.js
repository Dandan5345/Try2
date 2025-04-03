// firebase-config.js

// הגדרות Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCsp7xKutteUAxmjYQsQWDlrjK7URg-MR8",
  authDomain: "zman-zhav.firebaseapp.com",
  projectId: "zman-zhav",
  storageBucket: "zman-zhav.firebasestorage.app",
  messagingSenderId: "685099855512",
  appId: "1:685099855512:web:c3ad456591e1d92e436aed",
  measurementId: "G-XJ3LKJSW16"
};

// אתחול Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();