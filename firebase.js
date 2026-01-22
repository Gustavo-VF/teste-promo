
import { initializeApp } from
    "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth, GoogleAuthProvider } from
    "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYT8qbUvSBKG8fw_anKtE5TyN3tnt4ypY",
  authDomain: "teste-promo-f5931.firebaseapp.com",
  projectId: "teste-promo-f5931",
  storageBucket: "teste-promo-f5931.firebasestorage.app",
  messagingSenderId: "661353183670",
  appId: "1:661353183670:web:77abf053a3dc69a62ca917"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

