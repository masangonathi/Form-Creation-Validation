// 2.form selection
const form = document.getElementById('registration-form');

// 1. DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', (event) => {
// 3.select the feedback division
    const feedbackDiv = document.getElementById('form-feedback');

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    checkAnswer(); 
});

const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

// Validation logic

let isValid = true;
let messages = [];

//username validation
if (username.length < 3) {
    isValid = false;
    messages.push('Username must be at least 3 chareacters long.');
}
// email validation
if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push('Email must include both "@" and "." characters.');
}
// Password Validation 
if (password.length < 8) {
    isValid = false;
    messages.push('Password must be at least 8 characters long.');
}

// Display validation feedback

feedbackDiv.style.display = "block"; // Make feedbackDiv visible
if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745"; // Green color for success
} else {
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color = "#dc3545"; // Red color for errors
}

});