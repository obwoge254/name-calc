
function calcDayOfBirth(){ 
    event.preventDefault();
 //get date of birth
 var  dt = new Date(document.getElementById("mydob").value);


 //calculate of  day of week

 myDayOfweek  = dt.getDay() ;
// validation 



 //choose name either male/female
 //displaythe result
 document.getElementById('play').innerHTML = "Your year of birth is " + myYearOfBirth; 
}
