// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBJ31k0TJG0tMvDWygVLk9StwW8Ca-872M",
authDomain: "lbc2-30710.firebaseapp.com",
projectId: "lbc2-30710",
storageBucket: "lbc2-30710.appspot.com",
messagingSenderId: "571248148714",
appId: "1:571248148714:web:0085b1d1323732ec7d1793",
measurementId: "G-GZZC75YQF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);