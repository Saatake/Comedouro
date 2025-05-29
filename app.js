import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB78RgTf7rHLHTGhEHxHNvZ6xWL84QINSQ",
  authDomain: "upx3---comedouro.firebaseapp.com",
  projectId: "upx3---comedouro",
  storageBucket: "upx3---comedouro.firebasestorage.app",
  messagingSenderId: "967977800076",
  appId: "1:967977800076:web:91057a40b16801402a86a9",
  databaseURL: "https://upx3---comedouro-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.salvarHorarios = function () {
  const h1 = document.getElementById("h1").value;
  const h2 = document.getElementById("h2").value;
  set(ref(db, "horarios"), {
    h1,
    h2
  });
};

window.acionarRacao = function () {
  set(ref(db, "alimentarAgora"), true);
};

window.sincronizarHora = function () {
  const now = new Date();
  const hora = now.toTimeString().split(" ")[0];
  set(ref(db, "sincronizarHora"), hora);
};
