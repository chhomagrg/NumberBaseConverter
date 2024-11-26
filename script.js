/* 
    Number Base Converter
    Author: Chhoma Gurung
    Date: 11/25/2024

    Filename: script.js
*/

function convertBase() {
    // Get user inputs
    const inputNumber = document.getElementById("inputNumber").value.trim();
    const fromBase = parseInt(document.getElementById("fromBase").value);
    const toBase = parseInt(document.getElementById("toBase").value);
    const resultField = document.getElementById("resultField");

    try {
        // Check if the input is empty
        if (inputNumber === "") {
            throw "Please enter a number.";
        }

        // Check if the user-entered number is valid for the selected base
        const parsedNumber = parseInt(inputNumber, fromBase);
        if (isNaN(parsedNumber)) {
            throw `Invalid input for base ${fromBase}.`;
        }

        // Convert the number to the target base and display it
        const convertedNumber = parsedNumber.toString(toBase).toUpperCase();
        resultField.value = convertedNumber; // Show result
    } catch (error) {
        resultField.value = error; // Show error in the result field
    }
}

function updateTime() {
    // Get the current time
    const now = new Date();
    const timeStr = now.toLocaleTimeString();

    // Display the current time
    document.getElementById("currentTime").textContent = `${timeStr}`;
}

// Update the time every second
setInterval(updateTime, 1000);

function resetConverter() {
    // Clear all inputs and reset to default values
    document.getElementById("inputNumber").value = "";
    document.getElementById("fromBase").value = "10"; 
    document.getElementById("toBase").value = "10";  
    document.getElementById("resultField").value = ""; // Clear result field
}

function copyToClipboard() {
    // Get the result field
    const resultField = document.getElementById("resultField");

    // Select the result text
    resultField.select();
    resultField.setSelectionRange(0, 99999); // For mobile compatibility

    // Copy the text to clipboard
    navigator.clipboard.writeText(resultField.value);

    // Show an alert that text was copied
    alert("Copied the text: " + resultField.value);
}

function createOverlay() {
    // Create the overlay container
    let overlay = document.createElement("div");
    overlay.id = "helpOverlay";

    // Create a figure box for the content
    let figureBox = document.createElement("figure");
    overlay.appendChild(figureBox);

    // Add help instructions as text
    let overlayCaption = document.createElement("figcaption");
    overlayCaption.innerHTML = `
        <h2>How to Use the Number Base Converter</h2>
        <p>1. Enter the number you want to convert in the input box.</p>
        <p>2. Select the base of the number from the "From Base" dropdown menu.</p>
        <p>3. Select the target base using the "To Base" dropdown menu or the range slider.</p>
        <p>4. Click the "Convert" button to see the result.</p>
        <p>5. Click the "Reset" button to clear all the fields.</p>
        <p>6. Optionally, click the "Copy Result" button to copy the result to your clipboard.</p>
        <h3>Example:</h3>
        <p>Input: 1010 (Binary) → Output: 10 (Decimal)</p>
    `;
    figureBox.appendChild(overlayCaption);

    // Add a close button to the overlay
    let closeBox = document.createElement("div");
    closeBox.id = "lbOverlayClose";
    closeBox.innerHTML = "&times;";
    closeBox.onclick = function () {
        document.body.removeChild(overlay); // Remove the overlay
    };
    overlay.appendChild(closeBox);

    // Add the overlay to the body
    document.body.appendChild(overlay);
}
