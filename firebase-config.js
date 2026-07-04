import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPCCauEOhz2-NkLHDsOl-4Cq_Vo_Qjv_U",
  authDomain: "tambon-platform.firebaseapp.com",
  databaseURL: "https://tambon-platform-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tambon-platform",
  storageBucket: "tambon-platform.firebasestorage.app",
  messagingSenderId: "932528277138",
  appId: "1:932528277138:web:a377c249cbe46d9e98084b"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
