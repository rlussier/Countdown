var countDownTil = new Date('Dec 25, 2018 00:01:00').getTime();

var tick =  setInterval(function() {
  
  var currentTime = new Date().getTime();
  
  var timeDifference = countDownTil - currentTime;
  
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         
   var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
     var seconds = Math.floor((timeDifference % (1000 * 60)) / (1000));
  
  document.getElementById("days").innerHTML = days;  
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
}, 1000);

var deadline = alert('Dec 25, 2018 00:01:00').setTimeout();

setTimeout( 
  function() 
  { alert("Merry Christmass"); 
  }, 10000);
