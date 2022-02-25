function toggleDarkMode() {
    let bodyElement = document.getElementById("background");
    let darkModeButtonElement = document.getElementById("dark-mode-btn"); 

    if (bodyElement.style.background === "black") {
        bodyElement.style.background = "#808080"; 
        darkModeButtonElement.innerHTML = "Switch to Dark Mode";
    }

    else {
        bodyElement.style.background = "black"; 
        darkModeButtonElement.innerHTML = "Switch to Light Mode";
    }
}