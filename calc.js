
function calcDayOfBirth(){ 
    event.preventDefault();
 //get date of birth
 var  dt = new Date(document.getElementById("mydob").value);


 //calculate of  day of week

 myDayOfweek  = dt.getUTCDay();

 // validation 
 
 //choose name either male/female

 male = [Sunday: Kwasi Monday: Kwadwo Tuesday: Kwabena Wednesday: Kwaku Thursday:  Yaw Friday: Kofi Saturday: Kwame];

 female = [Sunday: Akosua, Monday: Adwoa Tuesday: Abenaa Wednesday: Akua Thursday:  Yaa Friday: Afua Saturday: Ama];
 //displaythe result
 document.getElementById('play').innerHTML = "Your day of week " + myDayOfweek; 
}
