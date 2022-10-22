// Global colors
const primaryColor = "#2c74b4";
const secondaryColor = "#e0524e";
const dark = "#000";
const white = "#fff";

const firstSection = document.querySelector(".first-section");

firstSection.addEventListener("mouseenter", function() {
    this.style.backgroundColor = primaryColor;
    this.style.color = white
})

firstSection.addEventListener("mouseleave", function() {
    this.style.backgroundColor = secondaryColor;
    this.style.color = dark;
})




