// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYT8qbUvSBKG8fw_anKtE5TyN3tnt4ypY",
    authDomain: "teste-promo-f5931.firebaseapp.com",
    projectId: "teste-promo-f5931",
    storageBucket: "teste-promo-f5931.firebasestorage.app",
    messagingSenderId: "661353183670",
    appId: "1:661353183670:web:77abf053a3dc69a62ca917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);