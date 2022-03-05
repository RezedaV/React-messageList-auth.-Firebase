// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWHvZpgLtBpyWFhDU4R-SnaiNg3Gv6I74",
    authDomain: "messagelist-282f6.firebaseapp.com",
    projectId: "messagelist-282f6",
    storageBucket: "messagelist-282f6.appspot.com",
    messagingSenderId: "337949911073",
    appId: "1:337949911073:web:776fc2391a490f4acddb60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) =>
    createUserWithEmailAndPassword(auth, email, pass);
export const logIn = (email, pass) =>
    signInWithEmailAndPassword(auth, email, pass);
export const logOut = () => signOut(auth);