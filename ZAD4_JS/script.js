// Numer indeksu: 69486

const themeButton = document.getElementById("themeButton");
const toggleSkillsButton = document.getElementById("toggleSkillsButton");
const themeStylesheet = document.getElementById("themeStylesheet");
const skillsSection = document.getElementById("skillsSection");

themeButton.addEventListener("click", function () {
    const currentTheme = themeStylesheet.getAttribute("href");

    if (currentTheme === "red.css") {
        themeStylesheet.setAttribute("href", "green.css");
        themeButton.textContent = "Zmień motyw na czerwony";
    } else {
        themeStylesheet.setAttribute("href", "red.css");
        themeButton.textContent = "Zmień motyw na zielony";
    }
});

toggleSkillsButton.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsButton.textContent = "Ukryj sekcję Umiejętności";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsButton.textContent = "Pokaż sekcję Umiejętności";
    }
});