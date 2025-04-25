// Function to change text content dynamically
function changeText() {
    document.getElementById("paragraph").textContent = "Text has been changed!";
}

// Function to add or remove an element when a button is clicked
function toggleElement() {
    let box = document.getElementById("box");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}