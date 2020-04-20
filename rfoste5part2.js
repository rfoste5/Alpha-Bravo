/*Description: Assignment 2 Part 2: Clock Application
  Date: March 12, 2018
  Author: Ryan Foster (rfoste5) */

var hour24; 

//fuction for local time display
function seeTime() { 
    clear ();
    
    //variable allows for the local date (time) to be set 
    var time = new Date(); 
    //variable allows for the local hours to be set depending on location 
    var hour = time.getHours(); 
    //variable allows for local minutes to be set depending on location
    var minutes = time.getMinutes(); 
    //variable allows for the PM and AM toggles to be set appropriately 
    var pmam; 
    
// when hours is past noon then PM is displayed if not then it is AM 
    hour24 = hour;
    
    if (hour>=12){
        if(hour>12){
            hour=hour-12;
        }
        pmam="PM";
    }
    else {
        pmam="AM"; 
    }

//checkes if number radio button is checked
    if ( document.getElementById("numbercurrent").checked == true ){
        document.getElementById("digclock").style.color = "white";
        
        //used to add an extra zero to fill in the time when numbers are less than 10 (ex.1:05)
        if (minutes < 10){
            document.getElementById("digclock").innerHTML= hour +":0"+ minutes +" "+pmam;
        }
        else{
            document.getElementById("digclock").innerHTML= hour +":"+ minutes +" "+pmam;
        }
        
    }
    
    //checks if word radio button is checked
    else if (document.getElementById("wordcurrent").checked == true) {
        
        //Setting PM or AM on the word clock and lighting it up white 
       if ( pmam == "PM"){
           document.getElementById("PM").style.color ="white";
       }
        else {
            document.getElementById("AM").style.color ="white";
        }
        
        //setting hour so it rounds to the hour within the interval 
        if (minutes>57 || minutes<=2){
            if(minutes>57){
               hour = hour +1; 
            }
        }
        //setting hour so it reads properly with the to/past toggles (ex. 3:40pm should read as twenty to four) so the extra hour needs to be added 
        else if (minutes>33){
            document.getElementById("to").style.color ="white"; 
            
            if (hour ==12){
                hour = 1;
            }
            else {
                hour = hour +1;
            }
        }
        else {
            document.getElementById("past").style.color = "white";
        }
        
        //setting the correct hours and minutes in the word clock
        setWords(hour, minutes);
    }
    // if nothing is checked the alert will force a decision
    else{
        alert ("Please Select a button");
    }
}

// function for setting the time yourself 
function setTime(){ 
    clear ();
    
    var time = document.getElementById("timeset").value;
    //used a split to concadinate hours, minutes and PM/AM where Hours = hours[0] and minutes = hours [1] in the array
    var hours = time.split(":"); 
    hour24 = hours[0];
//checks to see if the radio button for 'numbers' is selected 
    if (document.getElementById("setnumber").checked==true){
        
//when setting a number using the time input it forces and output in 24 hour time so setting it to subtract 12 allows for the PM/AM to work properly
        
        if(hours[0]>=12){
            if(hours[0] != 12){
                hours[0] = hours[0] - 12; 
            }
            
        //if hour is greater than 12 (13+), subtract 12 and display PM... if not, display AM
            document.getElementById("digclock").innerHTML= hours[0] + ":" + hours[1]+ " PM";
        }
        else{
            document.getElementById("digclock").innerHTML= hours[0] + ":" + hours[1]+ " AM";
        }
    }
    
    // checks to see if the radio button is selected for 'words'
    else if (document.getElementById("setword").checked==true){
        
        //12AM in 24hr time is 00... but the word clock doesnt display this so 00=12 to accomidate for the words
        if(hours[0]<12){
            if (hours[0] == 00){
                hours[0] = 12 ;
            }
            
            //if the hour is less than 12, toggle the AM to white 
            document.getElementById("AM").style.color ="white";
        }
        
        //24hr clock uses 1pm as 13 so subtracting 12 accomidates for the 12 hour format in the word clock and then toggles PM to white 
        else{
            hours[0] = hours[0] -12;
            document.getElementById("PM").style.color ="white";
        }
        
        //if the minutes is approaching a new hour we want it to round up to the next hour (ex. 9:58) want it to say 10 not 9 on the word clock
        if (hours[1]>57 || hours[1]<=2){
            if(hours[1]>57){
               hours[0] = hours[0] +1; 
            }
        }
        
        //anything greater than 33 minutes should toggle the 'to' to white (ex.twenty TO, quarter TO etc.)
        else if (hours[1]>33){
            document.getElementById("to").style.color ="white"; 
        
            //if minutes is greater than 33, add 1 to the hour so it begins to read as (12:40 = twenty to one) instead of staying on the hour its on
            if (hours[0] == 00){
                hours[0] = 1;
            }
            else {
                hours[0] = hours[0] +1;
            }
        }
        
        //anything below the minute 33 should use the past toggle 
        else {
            document.getElementById("past").style.color = "white";
            
            //24hr clock shows midnight as 00; to accomidate for the word clock '00 = 12' so that the 'twelve' toggle is shown 
            if (hours[0] == 00){
                hours[0] = 12;
            }
        }
        
        //call setWords function in hours[0] and minutes[1]
        setWords(hours[0], hours[1]);
        
    }
    
    //if no radio button is selected an alert pops up 
    else {
        alert ("Please Select a Button");
    }
}

// function for clearing values when a different option is selected 
function clear (){
    document.getElementById("one").style.color = "#1A1A1A";
    document.getElementById("two").style.color = "#1A1A1A";
    document.getElementById("three").style.color = "#1A1A1A";
    document.getElementById("four").style.color = "#1A1A1A";
    document.getElementById("five").style.color = "#1A1A1A";
    document.getElementById("six").style.color = "#1A1A1A";
    document.getElementById("seven").style.color = "#1A1A1A";
    document.getElementById("eight").style.color = "#1A1A1A";
    document.getElementById("nine").style.color = "#1A1A1A";
    document.getElementById("ten").style.color = "#1A1A1A";
    document.getElementById("eleven").style.color = "#1A1A1A";
    document.getElementById("twelve").style.color = "#1A1A1A";
    document.getElementById("pastfive").style.color = "#1A1A1A";
    document.getElementById("ten1").style.color = "#1A1A1A";
    document.getElementById("quarter").style.color = "#1A1A1A";
    document.getElementById("twenty").style.color = "#1A1A1A";
    document.getElementById("twenty").style.color = "#1A1A1A";
    document.getElementById("pastfive").style.color = "#1A1A1A";  
    document.getElementById("half").style.color = "#1A1A1A";
    document.getElementById("AM").style.color ="#1A1A1A";
    document.getElementById("PM").style.color ="#1A1A1A";
    document.getElementById("to").style.color ="#1A1A1A"; 
    document.getElementById("past").style.color ="#1A1A1A"; 
    document.getElementById("itis").style.color ="#1A1A1A";
    document.getElementById("oclock").style.color ="#1A1A1A";
    document.getElementById("morning").style.color ="#1A1A1A"; 
    document.getElementById("afternoon").style.color ="#1A1A1A"; 
    document.getElementById("evening").style.color ="#1A1A1A"; 
    document.getElementById("night").style.color ="#1A1A1A"; 
} 


//function used to set the hours and minutes on the word clock for both applications above (seeTime and setTime)
function setWords(hour, minutes){ 
    
    //"it is" and "oclock" are always going to be on no matter what the case will be 
    document.getElementById("itis").style.color ="white";
    document.getElementById("oclock").style.color ="white";
    
    // setting hours on the word clock
     if (hour == 1){
            document.getElementById("one").style.color = "white";
        }
        else if (hour == 2) {
            document.getElementById("two").style.color = "aqua";
        }
        else if (hour ==3){
            document.getElementById("three").style.color = "brown";
        }
        else if (hour ==4){
            document.getElementById("four").style.color = "blue";
        }
        else if (hour ==5){
            document.getElementById("five").style.color = "darkMagenta";
        }
        else if (hour ==6){
            document.getElementById("six").style.color = "darkOrange";
        }
        else if (hour ==7){
            document.getElementById("seven").style.color = "deepPink";
        }
        else if (hour ==8){
            document.getElementById("eight").style.color = "Gold";
        }
        else if (hour ==9){
            document.getElementById("nine").style.color = "hotPink";
        }
        else if (hour ==10){
            document.getElementById("ten").style.color = "lawnGreen";
        }
        else if (hour ==11){
            document.getElementById("eleven").style.color = "OliveDrab";
        }
        else if (hour ==12 || hour ==0){
            document.getElementById("twelve").style.color = "Salmon";
        }
        
        //setting minutes on the word clock using the intervals specified in the assignment 
        if (minutes>2 && minutes<=7 || minutes>52 && minutes<=57){
            document.getElementById("pastfive").style.color = "white";
        }
        else if (minutes>7 && minutes<=12 || minutes>47 && minutes<=52){
            document.getElementById("ten1").style.color = "white";
        }
        else if (minutes>12 && minutes<=17 || minutes>42 && minutes<=47){
            document.getElementById("quarter").style.color = "white";
        }
        else if (minutes>17 && minutes<=22 || minutes>37 && minutes<=42){
            document.getElementById("twenty").style.color = "white";
        }
        else if (minutes>22 && minutes<=27 || minutes>32 && minutes<=37){
            document.getElementById("twenty").style.color = "white";
            document.getElementById("pastfive").style.color = "white";  
        }
        else if (minutes>27 && minutes<=32){
            document.getElementById("half").style.color = "white";
        }
    
        //setting the approriate time of day on the word clock using the appropriate interval times
        if (hour24>5 && hour24<=11){
            document.getElementById("morning").style.color = "PaleVioletRed"; 
        }
        else if (hour24>11 && hour24<=16){
            document.getElementById("afternoon").style.color = "PaleGreen";
        }
        else if (hour24>=17 && hour24<=23){
            document.getElementById("evening").style.color = "PaleGoldenRod";
        }
        else {
            document.getElementById("night").style.color = "PaleTurquoise";
        }
        
}