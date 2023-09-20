// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
// import "firebase/firestore";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA36DyFEiFOb_fe13PJN8hPsMkpdHZHDQU",
    authDomain: "wish-or-junk---image-upload.firebaseapp.com",
    projectId: "wish-or-junk---image-upload",
    storageBucket: "wish-or-junk---image-upload.appspot.com",
    messagingSenderId: "1049724261485",
    appId: "1:1049724261485:web:b6f1e3f054a751020f9b64",
    measurementId: "G-D41B8V8TVS"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyCfJw14iRoQpPIwX0gfoXz7DZwUaZO5-Ck",
//     authDomain: "wish-or-junk-profile.firebaseapp.com",
//     projectId: "wish-or-junk-profile",
//     storageBucket: "wish-or-junk-profile.appspot.com",
//     messagingSenderId: "592172430865",
//     appId: "1:592172430865:web:299a707fcc5b7fde2823b0"
//   };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
// const db = firebase.firestore();

// authentication functions
export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
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

//Storage

export async function upload(file, currentUser, setLoading) {
    const fileRef = ref(storage, currentUser.uid + '.png');

    setLoading(true);

    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef,);

    updateProfile(currentUser, { photoURL });

    setLoading(false);
    alert("Uploaded File!");
}

// RMB

// const db = getFirestore(app);

// export { db };