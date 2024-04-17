"use strict";
/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Diana Ruiz Garcia
  Date: 04/16/2024
  Filename: Script
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add the table objects 
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
  { tableNumber: 3, capacity: 4, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
  { tableNumber: 5, capacity: 4, isReserved: false },
  { tableNumber: 6, capacity: 4, isReserved: false },
  { tableNumber: 7, capacity: 4, isReserved: false },
  { tableNumber: 8, capacity: 4, isReserved: false },
  { tableNumber: 9, capacity: 4, isReserved: false },
  { tableNumber: 10, capacity: 4, isReserved: false },
  { tableNumber: 11, capacity: 6, isReserved: false },
  { tableNumber: 12, capacity: 6, isReserved: false },
  { tableNumber: 13, capacity: 6, isReserved: false },
  { tableNumber: 14, capacity: 6, isReserved: false }
];
let message;

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Check if the table is available or not
  tables.forEach(function(table) {
    if (table.tableNumber == tableNumber && table.isReserved == false) {
      table.isReserved = true;
      setTimeout(() => {
        callback("success");
      }, time);
    } else if (table.tableNumber == tableNumber && table.isReserved == true) {
      callback("error");
    }
  })
}

// Callback function that updates the webpage with the success or error message
function takeTable(text) {
  if (text == "success") {
    message.textContent = "The table is ready.";
  } else {
    message.textContent = "The table is not available.";
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Set variables that refers to the form values
    let name = document.getElementById("name").value;
    let tableNumber = document.getElementById("tableNumber").value;
    message = document.getElementById("message");

    // Function that prevent the browser from responding to the submit event
    e.preventDefault();

    // Verify that the user has entered the correct table number
    if (tableNumber > 14) {
      message.textContent = "The table number entered exceeds the number of tables" + 
                            "in the restaurant. Please enter a number between 1 and 14.";
      return;
    } else if (tableNumber < 1) {
      message.textContent = "The table number entered is less than the number of tables" + 
                            "in the restaurant. Please enter a number between 1 and 14.";
      return;
    }

    // Call function to reserve table 
    message.textContent = `Table reserved under the name ${name}.`;
    reserveTable(tableNumber, takeTable, 5000);
  });
