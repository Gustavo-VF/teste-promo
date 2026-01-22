import { auth } from './firebase.js';
import {
    EmailAuthProvider,
    linkWithCredential
} from
    "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

async function vicularSenha(email, senha) {
    const user = auth.currentUser;

    const credential = EmailAuthProvider.credential(email, senha);

    await linkWithCredential(user, credential);

    alert("E-mail e senha vinculados com sucesso!");
};