
function calcDayOfBirth(){ 
    event.preventDefault();
 //get date of birth
 var  dt = new Date(document.getElementById("mydob").value);


 //calculate of  day of week

 myDayOfweek  = dt.getDay();

 // validation
 
 var dt;
bday = window.prompt("When is your birthday (YYYY-MM-DD)?","");
var bdayArray = bday.split('-');

if(bdayArray.length !== 3){
    alert("invalid Date");
}else{
   if(!bdayArray[0].match(/^\d\d\d\d$/) || 
      !bdayArray[1].match(/^\d\d$/) || 
      !bdayArray[2].match(/^\d\d$/)){
       alert("invalid Date");  
       
    }else{
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];     
        var currentTime = new Date(            
            parseInt(bdayArray[0]),
            parseInt(bdayArray[1]) - 1, 
            parseInt(bdayArray[2])
        ); 
 
 //choose name either male/female

 //male = [Sunday: Kwasi Monday: Kwadwo Tuesday: Kwabena Wednesday: Kwaku Thursday:  Yaw Friday: Kofi Saturday: Kwame];

 //female = [Sunday: Akosua, Monday: Adwoa Tuesday: Abenaa Wednesday: Akua Thursday:  Yaa Friday: Afua Saturday: Ama];
 //displaythe result
 document.getElementById('display').innerHTML = "Your day of week " + myDayOfweek; 
 
}
