// Array representing hexadecimal digits (0-9 and A-F)
let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Array to hold the parts of the color code
let colorParts = [];

// Loop to generate 6 random hexadecimal digits
for (let i = 0; i < 6; i++) {
  // Push a random element from hexArray into colorParts
  colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
}

// Combine the color parts into a single string prefixed with '#'
let finalColor = `#${colorParts.join("")}`;

// Select the HTML element with the class 'box-color'
let gatBoxColor = document.querySelector(".box-color");

// Append the final color code as text to the selected element
gatBoxColor.textContent = finalColor;

// Set the background color of the body to the generated color
document.body.style.backgroundColor = finalColor;

// Function to copy the color code to clipboard
function copyColorCode() {
  // Create a temporary textarea element
  let tempInput = document.createElement("textarea");
  // Set its value to the final color code
  tempInput.value = finalColor;
  // Append it to the body
  document.body.appendChild(tempInput);
  // Select the text inside the textarea
  tempInput.select();
  // Execute the copy command
  document.execCommand("copy");
  // Remove the temporary textarea element from the body
  document.body.removeChild(tempInput);
  // Alert the user that the color code has been copied
  alert(`Copied the color code: ${finalColor}`);
}

// Select the copy button
let copyButton = document.getElementById("copyButton");
// Add a click event listener to the copy button
copyButton.addEventListener("click", copyColorCode);
