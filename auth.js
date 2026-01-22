import { auth, provider } from './firebase.js';

import { signInWithPopup } from
    "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginGoogle = document.getElementById("loginGoogle");

loginGoogle.onclick = async () => {
    try {
        await signInWithPopup(auth, provider);
        alert("Login com Google OK!");
        window.location.href = "cadastro/index.html";
    } catch (e) {
        alert("Erro no login");
        console.error(e);
    }
};
