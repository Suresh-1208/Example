
// script.js

// Run once the page loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded!");

    const header = document.querySelector("header");

    // Example interaction
    header.addEventListener("click", () => {
        alert("You clicked the header!");
    });
});