// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDi-eSppWAO7ovePVZhbA4FzKvMUgbV3Lg",
    authDomain: "smartinterview-eb4df.firebaseapp.com",
    projectId: "smartinterview-eb4df",
    storageBucket: "smartinterview-eb4df.firebasestorage.app",
    messagingSenderId: "470059920636",
    appId: "1:470059920636:web:67cc61abb6b9c2d46b7b79",
    measurementId: "G-SPFEEKG555"
};

// Initialize Firebase
const app =!getApps().length? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)