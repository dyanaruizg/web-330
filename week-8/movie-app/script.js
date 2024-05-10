/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Diana Ruiz Garcia
  Date: 05/08/2024
  Filename: script.js
*/

"use strict";

// Movie objects array
const movies = [
  {
    title: "On Your Wedding Day",
    director: "Lee Seok-geun",
    releaseYear: "2018",
    synopsis: "A man receives a wedding invitation from his first love whom he met " +
              "in high school. He reminisces all the trouble he went through to get " +
              "together with her over the span of years beginning from youth, and " +
              "how they had ups and downs in their life together. He finally goes to " +
              "her wedding, and thanks her for being the shining star in his life " +
              "and she thanks him for his support in need. He then walks away from " +
              "her wedding function."
  },
  {
    title: "20th Century Girl",
    director: "Bang Woo-ri",
    releaseYear: "2022",
    synopsis: "A teen girl has her eyes set on a boy for her lovesick best friend. " +
              "However, things become complicated when she falls in love and is forced " +
              "to choose between love and friendship."
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    releaseYear: "2019",
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic " +
              "relationship between the wealthy Park family and the destitute Kim clan."
  },
  {
    title: "The Notebook",
    director: "Nick Cassavetes",
    releaseYear: "2004",
    synopsis: "In 1940s South Carolina, mill worker Noah Calhoun (Ryan Gosling) and " +
              "rich girl Allie (Rachel McAdams) are desperately in love. But her parents " + 
              "don't approve. When Noah goes off to serve in World War II, it seems to " +
              "mark the end of their love affair. In the interim, Allie becomes involved " +
              "with another man (James Marsden). But when Noah returns to their small " +
              "town years later, on the cusp of Allie's marriage, it soon becomes clear " +
              "that their romance is anything but over."
  },
  {
    title: "A Star Is Born",
    director: "Bradley Cooper",
    releaseYear: "2018",
    synopsis: "Seasoned musician Jackson Maine discovers -- and falls in love with -- " +
              "struggling artist Ally. She has just about given up on her dream to make " +
              "it big as a singer until Jackson coaxes her into the spotlight. But even " +
              "as Ally's career takes off, the personal side of their relationship is " +
              "breaking down, as Jackson fights an ongoing battle with his own internal " +
              "demons."
  }, 
  {
    title: "La La Land",
    director: "Damien Chazelle",
    releaseYear: "2016",
    synopsis: "When Sebastian, a pianist, and Mia, an actress, follow their passion and " +
              "achieve success in their respective fields, they find themselves torn " +
              "between their love for each other and their careers."
  },
  {
    title: "Pride & Prejudice",
    director: "Joe Wright",
    releaseYear: "2005",
    synopsis: "Elizabeth Bennett is a strong-willed yet sensible young woman. At a " +
              "local ball, she encounters a wealthy young man, Mr Fitzwilliam Darcy, " +
              "who is arrogant, and they develop an unusual relationship."
  },
  {
    title: "The Fault in Our Stars",
    director: "Josh Boone",
    releaseYear: "2005",
    synopsis: "Teenager Hazel Grace's life changes when she meets Augustus Waters at " +
              "a cancer support group. The two then embark on a life-changing journey " +
              "which brings them even closer."
  }, 
  {
    title: "Love and Leashes",
    director: "Park Hyun-jin",
    releaseYear: "2022",
    synopsis: "Teenager Hazel Grace's life changes when she meets Augustus Waters at " +
              "a cancer support group. The two then embark on a life-changing journey " +
              "which brings them even closer."
  },
  {
    title: "Tune in for Love",
    director: "Jung Ji-woo",
    releaseYear: "2019",
    synopsis: "During the 1990s, hardworking Mi Soo and optimistic Hyun Woo meet at a " +
              "bakery and fall in love while exchanging stories on a radio station, " +
              "but while their paths keep crossing, the timing never seems to work out."
  }
];
let errorMessage = document.getElementById("error-message"); // Error Message element

// Function that return a Promise that simulates fetching data for the given title from the array.
function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    // Variables that manage the control of the movie search.
    let result;
    let foundMovie = false;
    let titleLowerCase = title.toLowerCase();

    // Verify that the title of a movie matches any movie in the array. 
    for (let movie of movies) {
      let movieLowerCase = movie.title.toLowerCase();
      
      if (movieLowerCase.includes(titleLowerCase) && title != "") {
        result = movie;
        foundMovie = true;
      }
    }

    // Use the setTimeout to simulate a delay in fetching the data. 
    setTimeout(() => {  
      // Verify that search results were found                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ge if the movie title is not found in the array. 
      if (foundMovie) {
        // Resolve the movie object.
        resolve(result);
      } else {
        // Reject with an error message
        reject("The movie could not be found.");
      }
    }, 2000);
  });
}

// Function that is called when the user submits the form.
async function displayMovie(input) {
  try {
    // Access to the movie info element
    let movieInfo = document.getElementById("movie-info");
    // Wait for fetchMovie to complete
    let result = await fetchMovie(input);

    // Update the HTML of the page to display the movie information
    movieInfo.children["movie-title"].innerHTML = result.title;
    movieInfo.children["movie-director"].innerHTML = "Director: " + result.director;
    movieInfo.children["movie-year"].innerHTML = "Year: " + result.releaseYear;
    movieInfo.children["movie-synopsis"].innerHTML = "Synopsis: " + result.synopsis;
  } catch (error) {
    // Display an error message if the movie title is not found
    errorMessage.innerHTML = error;
  }
}

// Search for the movie info when the movie-form is submitted.
document.getElementById("movie-form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent browser from submitting form
  errorMessage.innerHTML = ""; // Clear the error message 

  // Get the title entered by the user
  let input = document.getElementById("title-input").value;
  displayMovie(input); // Display the movie
});