
"use strict";

// ========================================
// MOSES WEB SOLUTIONS - JAVASCRIPT
// ========================================

// 1. SAY HELLO BUTTON
const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

if (welcomeButton && message) {
    welcomeButton.addEventListener("click", function () {
        message.textContent =
            "Welcome! Thank you for visiting Moses Web Solutions.";

        welcomeButton.textContent = "Thank You!";
    });
}

// 2. UPDATE COPYRIGHT YEAR
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// 3. CONTACT FORM VALIDATION
// The browser submits valid forms to Formspree.
// This code does not prevent submission or claim delivery.
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const contactMessage =
            document.getElementById("messageInput").value.trim();

        if (!name || !email || !contactMessage) {
            event.preventDefault();

            formFeedback.textContent =
                "Please complete all fields before sending.";

            formFeedback.style.color = "#b91c1c";
            return;
        }

        // Do not call event.preventDefault() here.
        // Let the browser submit the form to Formspree.
        formFeedback.textContent = "Submitting your message...";
        formFeedback.style.color = "#0369a1";
    });
}