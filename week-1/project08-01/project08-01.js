"use strict";
/*    
  JavaScript 7th Edition
  Chapter 8
  Project 08-01

  Project to create a timer object
  Author: Diana Ruiz Garcia
  Date: 03/21/2024

  Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

/* Constructor function for the timer */
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// Method to run and pause the timer
timer.prototype.runPause = function(timer, minBox, secBox) {
  // Verifying whether the timer id has a value
  if (timer.timeID) {
    // If it does, the timer will pause
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    // Otherwise, the timer will start
    timer.timeID = window.setInterval(countdown, 1000);

    /* Verifying that the minutes and seconds reach 0:0 
      to restart the timer from the beginning. */
    if (timer.minutes == 0 && timer.seconds == 0) {
      timer.minutes = 5;
      timer.seconds = 39;
    }

    /* Function that updates the timer every second */
    function countdown() {
      if (timer.seconds > 0) {
        timer.seconds--;
      } else if (timer.minutes > 0) {
        timer.minutes--;
        timer.seconds = 59;
      } else {
        window.clearInterval(timer.timeID);
        timer.timeID = null;
      }

      // Set the minutes and seconds on the timer
      minBox.value = timer.minutes;
      secBox.value = timer.seconds;
    }
  }
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Create a timer
let myTimer = new timer(minBox.value, secBox.value);

// Change the minutes when the timer changes
minBox.onchange = function() {
  myTimer.minutes = minBox.value;
}

// Change the seconds when the timer changes
secBox.onchange = function() {
  myTimer.seconds = secBox.value;
}

// Run/Pause the timer when the timer button is clicked
runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
}