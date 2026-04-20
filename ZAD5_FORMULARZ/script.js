// Numer indeksu: 69486

const themeButton = document.getElementById("themeButton");
const toggleSkillsButton = document.getElementById("toggleSkillsButton");
const themeStylesheet = document.getElementById("themeStylesheet");
const skillsSection = document.getElementById("skillsSection");

const contactForm = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

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

function containsDigit(text) {
    return /\d/.test(text);
}

function isValidEmail(text) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
}

function clearErrors() {
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";
}

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    let isValid = true;

    if (firstName.value.trim() === "") {
        firstNameError.textContent = "Pole imię jest wymagane.";
        isValid = false;
    } else if (containsDigit(firstName.value)) {
        firstNameError.textContent = "Imię nie może zawierać cyfr.";
        isValid = false;
    }

    if (lastName.value.trim() === "") {
        lastNameError.textContent = "Pole nazwisko jest wymagane.";
        isValid = false;
    } else if (containsDigit(lastName.value)) {
        lastNameError.textContent = "Nazwisko nie może zawierać cyfr.";
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Pole e-mail jest wymagane.";
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        emailError.textContent = "Podaj poprawny adres e-mail.";
        isValid = false;
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Pole wiadomość jest wymagane.";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Formularz został poprawnie wypełniony.";
        contactForm.reset();
    }
});