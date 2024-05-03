/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Diana Ruiz Garcia
  Date: 05/02/2024
  Filename: script.js
*/

"use strict";

let heroes = [
  // Create superhero objects
  {
    name: "Batman",
    superpower: "Master Martial Artist",
    weakness: "Past trauma",
    city: "Gotham"
  },
  {
    name: "Catwoman",
    superpower: "Master Thief",
    weakness: "Laser pointers",
    city: "Gotham"
  },
  {
    name: "Robin",
    superpower: "Combat Strategy",
    weakness: "Swim",
    city: "Gotham"
  }
];

// Function that returns a promise that “fetches” for the data 
// of the superhero 1 in the object array
function fetchHero1() {
  return new Promise((resolve, reject) => {
    // Use the setTimeout to simulate a delay in fetching the data. 
    setTimeout(() => {
      // Simulate a promise rejection
      if (Math.random() < 0.9) {
        // Update the webpage with the superhero 1 data
        resolve(heroes[0]);
      } else {
        // Display an error message in the webpage
        reject("The superhero Batman could not be found.");
      }
    }, 2000);
  });
}

// Function that returns a promise that “fetches” for the data 
// of the superhero 2 in the object array
function fetchHero2() {
  return new Promise((resolve, reject) => {
    // Use the setTimeout to simulate a delay in fetching the data. 
    setTimeout(() => {
      // Simulate a promise rejection
      if (Math.random() < 0.9) {
        // Update the webpage with the superhero 2 data
        resolve(heroes[1]);
      } else {
        // Display an error message in the webpage
        reject("The superhero Catwoman could not be found.");
      }
    }, 6000);
  });
}

// Function that returns a promise that “fetches” for the data 
// of the superhero 2 in the object array
function fetchHero3() {
  return new Promise((resolve, reject) => {
    // Use the setTimeout to simulate a delay in fetching the data. 
    setTimeout(() => {
      // Simulate a promise rejection
      if (Math.random() < 0.9) {
        // Update the webpage with the superhero 2 data
        resolve(heroes[2]);
      } else {
        // Display an error message in the webpage
        reject("The superhero Robin could not be found.");
      }
    }, 4000);
  });
}

// Use Promise.allSettled to fetch all heroes and update the webpage
Promise.allSettled([fetchHero1(), fetchHero2(), fetchHero3()])
.then((results) => {
  results.forEach((result) => {
    // If a promise is fulfilled, update the webpage with the superhero data
    if (result.status === "fulfilled") {
      // Save the value of the superhero name returned by the promise
      let heroName = result.value.name;
      switch (heroName) {
        case "Batman":
          // Set the values of the superhero Batman on the webpage
          setHero1(result.value);
          break;
        case "Catwoman":
          // Set the values of the superhero Catwoman on the webpage
          setHero2(result.value);
          break;
        case "Robin":
          // Set the values of the superhero Robin on the webpage
          setHero3(result.value);
          break;
        default:
          break;
      }
    } 
    // If a promise is rejected, display an error message in the webpage 
    // under the section where the promise failed 
    else {
      // Save the error reason value returned by the promise
      let reason = result.reason;
      // Verify if the reason includes the superhero Batman
      if (reason.includes("Batman")) {
        // Set error message placed under the first section in the webpage
        errorHero1(reason);
      } 
      // Verify if the reason includes the superhero Catwoman
      else if (reason.includes("Catwoman")) {
        // Set error message placed under the second section in the webpage
        errorHero2(result.reason);
      } 
      // Verify if the reason includes the superhero Robin
      else if (reason.includes("Robin")) {
        // Set error message placed under the third section in the webpage
        errorHero3(result.reason);
      }
    }
  });
}).catch((error) => {
  console.log("An error occurred:", error);
});

// Function that sets the values of the superhero 1
function setHero1(hero) {
  const hero1 = document.getElementById("hero1");
  const imgHero1 = document.getElementById("imgHero1");
  const nameHero1 = document.getElementById("nameHero1");
  const superpowerHero1 = document.getElementById("superpowerHero1");
  const weaknessHero1 = document.getElementById("weaknessHero1");
  const cityHero1 = document.getElementById("cityHero1");

  hero1.style.display = "block";
  imgHero1.src = "batman.jpg";
  nameHero1.textContent = hero.name;
  superpowerHero1.textContent = "Superpower: " + hero.superpower;
  weaknessHero1.textContent = "Weakness: " + hero.weakness;
  cityHero1.textContent = "City: " + hero.city;
}

// Function that sets the values of the superhero 2
function setHero2(hero) {
  const hero2 = document.getElementById("hero2");
  const imgHero2 = document.getElementById("imgHero2");
  const nameHero2 = document.getElementById("nameHero2");
  const superpowerHero2 = document.getElementById("superpowerHero2");
  const weaknessHero2 = document.getElementById("weaknessHero2");
  const cityHero2 = document.getElementById("cityHero2");

  hero2.style.display = "block";
  imgHero2.src = "catwoman.jpg";
  nameHero2.textContent = hero.name;
  superpowerHero2.textContent = "Superpower: " + hero.superpower;
  weaknessHero2.textContent = "Weakness: " + hero.weakness;
  cityHero2.textContent = "City: " + hero.city;
}

// Function that sets the values of the superhero 3
function setHero3(hero) {
  const hero3 = document.getElementById("hero3");
  const imgHero3 = document.getElementById("imgHero3");
  const nameHero3 = document.getElementById("nameHero3");
  const superpowerHero3 = document.getElementById("superpowerHero3");
  const weaknessHero3 = document.getElementById("weaknessHero3");
  const cityHero3 = document.getElementById("cityHero3");

  hero3.style.display = "block";
  imgHero3.src = "robin.jpg";
  nameHero3.textContent = hero.name;
  superpowerHero3.textContent = "Superpower: " + hero.superpower;
  weaknessHero3.textContent = "Weakness: " + hero.weakness;
  cityHero3.textContent = "City: " + hero.city;
}

// Function that display an error message for superhero 1
function errorHero1(reason) {
  const hero1 = document.getElementById("hero1");
  const errorMessage1 = document.getElementById("errorMessage1");

  hero1.style.display = "block";
  errorMessage1.style.display = "block";
  errorMessage1.textContent = reason;
}

// Function that display an error message for superhero 2
function errorHero2(reason) {
  const hero2 = document.getElementById("hero2");
  const errorMessage2 = document.getElementById("errorMessage2");
  
  hero2.style.display = "block";
  errorMessage2.style.display = "block";
  errorMessage2.textContent = reason;
}

// Function that display an error message for superhero 3
function errorHero3(reason) {
  const hero3 = document.getElementById("hero3");
  const errorMessage3 = document.getElementById("errorMessage3");
  
  hero3.style.display = "block";
  errorMessage3.style.display = "block";
  errorMessage3.textContent = reason;
}