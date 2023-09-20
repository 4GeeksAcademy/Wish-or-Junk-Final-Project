// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { sendPasswordResetEmail } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8RITjSduafW403ncXWHkSEPQKR-B7r44",
  authDomain: "login-and-signup-for-woz-67bb3.firebaseapp.com",
  projectId: "login-and-signup-for-woz-67bb3",
  storageBucket: "login-and-signup-for-woz-67bb3.appspot.com",
  messagingSenderId: "402438109456",
  appId: "1:402438109456:web:71eed4cdc1dba7557ccd95",
  measurementId: "G-K6ZSKKLC00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}
export function logout() {
    return signOut(auth);
}
export function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
}
//Custom hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])
    return currentUser;
}