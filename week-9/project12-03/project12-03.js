"use strict";
/*    
  JavaScript 7th Edition
  Chapter 12
  Project 12-03

  Project to show a recipe with expanding/contracting content
  Author: Diana Ruiz Garcia
  Date:   5/18/2024

  Filename: project12-03.js
*/

// Run once the page is loaded and ready
$(() => {

  // Add click events to each h2 selector
  $("article > h2").click( e => {
    // Declare a variable referencing the target of the click event
    let heading = $(e.target); 
    // Declare a variable referencing the next sibling of the heading variable
    let list = $(heading.next()); 
    // Declare a variable referencing the children of the heading variable
    // whose tag name is "img"
    let headingImage = $(heading).children("img");

    // Alternate between hiding and showing the list
    $(list).slideToggle(500);

    // Change the symbol displayed in the headings
    if($(headingImage).attr("src") === "plus.png") {
      $(headingImage).attr("src", "minus.png");
    } else {
      $(headingImage).attr("src", "plus.png");
    }
  });
})