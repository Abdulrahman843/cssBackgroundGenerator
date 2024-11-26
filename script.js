// Select DOM elements
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

// Function to set the gradient background and display the CSS
function setGradient(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

// Function to initialize the gradient on page load
function initializeGradient(){
    setGradient(); // Set gradient using the default values of color1 and color2
}

// Function to generate a random hex color
function getRandomColor(){
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,'0')}`;
}

// Function to set a random gradient
function setRandomGradient(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

// Add event listeners
color1.addEventListener("input", setGradient); // Update gradient on color1 input change

color2.addEventListener("input", setGradient); // Update gradient on color2 input change

randomButton.addEventListener("click", setRandomGradient); // Set random gradient on button click

// Initialize gradient on page load
initializeGradient();