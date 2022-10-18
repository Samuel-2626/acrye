// Global colors
var primaryColor = "#2c74b4";
var secondaryColor = "#e0524e";

let firstSection = document.querySelector(".first-section");
let firstSectionMainText = document.querySelector(".first-section__main-text");
let firstSectionSecondaryText = document.querySelector(".first-section__secondary-text");

firstSection.addEventListener("mouseenter", function() {
    this.style.backgroundColor = primaryColor;
})

firstSection.addEventListener("mouseleave", function() {
    this.style.backgroundColor = secondaryColor;
})


setInterval(() => {
    
    if(firstSectionMainText.style.display === "block") {
        firstSectionMainText.style.display = "none";
    } else {
        firstSectionMainText.style.display = "block";
    }
    
}, 1000);

// setInterval(() => {
//     firstSectionSecondaryText.style.display = "block";
// }, 2000);
