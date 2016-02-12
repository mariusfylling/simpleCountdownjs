/**
**
**  Countdown JS by Marius Fylling, 3. February 2015
**
**/

var minutes;
var days;
var seconds;
var hours;


function updateCounter() {
  getTime();
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

function getTime() {
  var countTo = new Date(date);
  var now = new Date();

  var diff = countTo.getTime() - now.getTime();

  var daysDiff = diff/1000/60/60;
  days = Math.floor((diff/1000/60/60/24));

  var hoursL = (daysDiff - days*24);
  hours = Math.floor(hoursL);

  var minutesL = (hoursL%1)*60;
  minutes = Math.floor(minutesL);

  var secondsL = (minutesL%1)*60;
  seconds = Math.floor(secondsL);
  if(days < 0 | !date | date == 0) { days = 0; hours = 0; minutes = 0; seconds = 0;}
}

updateCounter();
setInterval(function(){ updateCounter() }, 1000);
