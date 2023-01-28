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

// create event listener on form
document.getElementById("competitor-signup").addEventListener('submit', formSubmit);

function formSubmit(e) 
{
    e.preventDefault();
    // get form values
    let team_name = document.querySelector('#team-name').value;
    let experience_level = document.querySelector('#experience-level').value;
    let team_lead_name = document.querySelector('#lead-name').value;
    let team_lead_school = document.querySelector('#lead-school').value;
    let team_lead_email = document.querySelector('#lead-email').value;
    let team_member2 = document.querySelector('#member2').value;
    let team_member3 = document.querySelector('#member3').value;
    let team_member4 = document.querySelector('#member4').value;

    let db = ref(database, 'Competitors/' + experience_level + '/' + team_name);

    onValue(db, (snapshot) => {
      if(snapshot.val() != null) {
        console.log("team already exists");
        console.log(snapshot.val());
      }
      else {
        console.log("adding team: " + team_name);
        set(db, {
          team_lead_name: team_lead_name,
          team_lead_school: team_lead_school,
          team_lead_email: team_lead_email,
          team_member2: team_member2,
          team_member3: team_member3,
          team_member4: team_member4
        })
      }
    }, {
      onlyOnce: true
    });
} 