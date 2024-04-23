"use strict";
/*    
  JavaScript 7th Edition
  Chapter 11
  Project 11-02

  Project to city and state information from a provided postal code
  Author: Diana Ruiz Garcia
  Date:   04/23/2024

  Filename: project11-02.js
*/

// Page Objects
let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

// Fires when the postal code input loses the focus
postalCode.onblur = function() {
  // Get the values of the page objects
  let codeValue = postalCode.value;
  let countryValue = country.value;

  // Set the value of the place and region to an empty text string
  place.value = "";
  region.value = "";

  // Fetch to access the API
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return "Unable to find place and state";
    }
  })
  .then(json => {
    place.value = json.places[0]["place name"];
    region.value = json.places[0]["state abbreviation"];
  })
  .catch ((error) => console.log(error.message));
}