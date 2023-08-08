import firebase from "firebase"; // Correct the import statement

const firebaseConfig = {
  apiKey: "AIzaSyBnydLyDaXT-zAYWqOKtp9O15wzc0PhF7k",
  authDomain: "clone-yt-7883f.firebaseapp.com",
  projectId: "clone-yt-7883f",
  storageBucket: "clone-yt-7883f.appspot.com",
  messagingSenderId: "519086511080",
  appId: "1:519086511080:web:d20f30ecba5640941c4a5d",
};
const firebaseApp = firebase.initializeApp(firebaseConfig); // Correct the variable name to 'firebase'
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
