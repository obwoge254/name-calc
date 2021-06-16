
function calcDayOfBirth(){ 
    event.preventDefault();
 //get date of birth
 var  dt = new Date(document.getElementById("mydob").value);


 //calculate of  day of week

 //myDayOfweek  = dt.getDay();

 // validation
 
 var dt;
//bday = window.prompt("When is your birthday (YYYY-MM-DD)?","");
var dtArray = dt.split('-');

if(dtArray.length !== 3){
    alert("invalid Date");
}else{
   if(!dtArray[0].match(/^\d\d\d\d$/) || 
      !dtArray[1].match(/^\d\d$/) || 
      !dtArray[2].match(/^\d\d$/)){
       alert("invalid Date");  
       
    }else{
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];     
        var currentTime = new Date(            
            parseInt(dtArray[0]),
            parseInt(dtArray[1]) - 1, 
            parseInt(dtArray[2])
        ); 
        var currentDay = currentTime.getDay();       
        var currentDayName= days[currentDay];
       document.getElementById('display').innerHTML = "You were born on "+currentDayName;
    }
}
 
 //choose name either male/female

 //male = [Sunday: Kwasi Monday: Kwadwo Tuesday: Kwabena Wednesday: Kwaku Thursday:  Yaw Friday: Kofi Saturday: Kwame];

 //female = [Sunday: Akosua, Monday: Adwoa Tuesday: Abenaa Wednesday: Akua Thursday:  Yaa Friday: Afua Saturday: Ama];
 //displaythe result
 //document.getElementById('display').innerHTML = "Your day of week " + myDayOfweek; 
 
}
