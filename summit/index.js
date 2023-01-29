// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import { getDatabase, ref, set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ31k0TJG0tMvDWygVLk9StwW8Ca-872M",
  authDomain: "lbc2-30710.firebaseapp.com",
  databaseURL: "https://lbc2-30710-default-rtdb.firebaseio.com",
  projectId: "lbc2-30710",
  storageBucket: "lbc2-30710.appspot.com",
  messagingSenderId: "571248148714",
  appId: "1:571248148714:web:0085b1d1323732ec7d1793",
  measurementId: "G-GZZC75YQF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// create event listener on form
let form = document.getElementById("summit-signup");
form.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();

    // reference form elements
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let select = document.querySelector('#select').value;

    // add user
    let db = ref(database, 'Summit/' + name);

    onValue(ref(database, 'Summit/' + name + '/email'), (snapshot) => {
        if(snapshot.val() == email) {
            console.log(snapshot.val());
            document.querySelector('#email').setCustomValidity('Someone has already registered with this email. please wait 5 seconds then try again');
            document.querySelector('#email').reportValidity();
            sleep(5000).then(() => {document.querySelector('#team-name').setCustomValidity('');})
        }
        else {
            set(db, {
                email: email,
                select: select
            })
            form.reset();
            form.scrollIntoView();
            document.querySelector('#thanks').style.display = "block";
        }
    }, {
        onlyOnce: true
    });
}