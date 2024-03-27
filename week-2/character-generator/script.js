/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Diana Ruiz Garcia
  Date: 03/25/2024
  Filename: script.js
*/

"use strict";

// Function that creates a new character
function createCharacter(name, gender, characterClass) {
  return {
    getName: function() { // Returns the character's name
      return name;
    },
    getGender: function() { // Returns the character's gender
      return gender;
    },
    getCharacterClass: function() { // Return the character's class
      return characterClass;
    }
  }
}

// Event Handler when a user clicks the "Create Character" form
document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // Obtaining the values entered by the user
  const heroName = document.getElementById("heroName").value;
  const heroGender = document.getElementById("heroGender").value;
  const heroClass = document.getElementById("heroClass").value;

  // Create a new character with the entered name, selected gender, and class. 
  const hero = createCharacter(heroName, heroGender, heroClass);

  // Display the character’s name, gender, and class on the page
  const characterOutput = document.getElementById("characterOutput");
  characterOutput.style.display = "block";
  characterOutput.textContent = "The Character " + hero.getName() + " " + 
    hero.getGender() + " " + hero.getCharacterClass() + " has been created!";
});