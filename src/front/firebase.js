// Import the necessary modules from Firebase SDK
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    sendPasswordResetEmail
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA36DyFEiFOb_fe13PJN8hPsMkpdHZHDQU",
    authDomain: "wish-or-junk---image-upload.firebaseapp.com",
    projectId: "wish-or-junk---image-upload",
    storageBucket: "wish-or-junk---image-upload.appspot.com",
    messagingSenderId: "1049724261485",
    appId: "1:1049724261485:web:b6f1e3f054a751020f9b64",
    measurementId: "G-D41B8V8TVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

// Export firestore database
export const db = getFirestore(app);

// Authentication functions
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

// Custom hook to watch for user authentication state changes
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])
    return currentUser;
}

// Storage utilities
export async function upload(file, currentUser, setLoading) {
    const fileRef = ref(storage, currentUser.uid + '.png');

    setLoading(true);

    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, { photoURL });

    setLoading(false);
    alert("Uploaded File!");
}
