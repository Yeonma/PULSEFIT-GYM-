// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// WORKOUT CARD EXPANSION

function toggleWorkoutDetails(button) {
    const detailsId = button.getAttribute("aria-controls");
    const details = document.getElementById(detailsId);

    if (!details) return;

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    details.hidden = isExpanded;
    button.textContent = isExpanded ? "Learn More" : "Show Less";
}


// MEMBERSHIP - auto-select the plan the user clicked

function joinPlan(plan) {
    const planSelect = document.getElementById("plan");

    if (planSelect) {
        planSelect.value = plan;
    }

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// BMI CALCULATOR

function calculateBMI() {

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("bmiResult");

    if (!weight || !height || weight <= 0 || height <= 0) {
        result.textContent = "Please enter a valid weight and height.";
        return;
    }

    // Convert centimeters to meters
    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal range";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity range";
    }

    result.innerHTML =
        "Your BMI is <strong>" + bmi.toFixed(1) + "</strong><br>" +
        "Category: " + category;
}


// PHONE NUMBER: numbers only, max 11 digits

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "").slice(0, 11);
});


// MEMBERSHIP FORM

const membershipForm = document.getElementById("membershipForm");
const formMessage = document.getElementById("formMessage");

membershipForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const plan = document.getElementById("plan").value;

    if (!plan) {
        formMessage.textContent = "Please choose a membership plan.";
        return;
    }

    formMessage.textContent =
        "Welcome to PULSEFIT, " + name + "! Your " + plan +
        " membership request has been submitted.";

    membershipForm.reset();
});