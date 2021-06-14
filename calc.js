
<script>

    
</script>
function calcDayOfBirth(){ 
    event.preventDefault();

var bday;
    bday = window.prompt("When is your birthday (YYYY-MM-DD)?","");
    var bdayArray = bday.split('-');

//validate
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
           parseInt(bdayArray[1]) - 1, //month starts from 0
           parseInt(bdayArray[2])
       );        
       var currentDay = currentTime.getDay();       
       var currentDayName= days[currentDay];
      document.write("You were born on "+currentDayName);
   }
}


}
