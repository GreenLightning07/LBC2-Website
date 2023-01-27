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
}