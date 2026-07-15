const form = document.getElementById("registerForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const birthDate = document.getElementById("birthDate");

const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirmEmail");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const mobile = document.getElementById("mobile");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Name Validation
    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(firstName.value) || !nameRegex.test(lastName.value)) {
        alert("Names should contain letters only");
        return;
    }

    // Birth Date
    if (birthDate.value === "") {
        alert("Please select your birth date");
        return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
        alert("Invalid Email");
        return;
    }

    // Confirm Email
    if (email.value !== confirmEmail.value) {
        alert("Emails do not match");
        return;
    }

    // Password Length
    if (password.value.length < 8 || password.value.length > 32) {
        alert("Password length must be between 8 and 32");
        return;
    }

    // Starts with Capital Letter
    if (!/^[A-Z]/.test(password.value)) {
        alert("Password must start with a capital letter");
        return;
    }

    // At least 2 numbers
    let numbers = password.value.match(/\d/g);

    if (!numbers || numbers.length < 2) {
        alert("Password must contain at least two numbers");
        return;
    }

    // At least one special character
    if (!/[^A-Za-z0-9]/.test(password.value)) {
        alert("Password must contain one special character");
        return;
    }

    // Confirm Password
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return;
    }

    // Mobile Validation
    const mobileRegex = /^\d{10}$/;

    if (!mobileRegex.test(mobile.value)) {
        alert("Mobile number must contain exactly 10 digits");
        return;
    }

    // Create Object
    const user = {

        firstName: firstName.value,

        lastName: lastName.value,

        birthDate: birthDate.value,

        email: email.value,

        password: password.value,

        mobile: mobile.value

    };

    // Save
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    form.reset();

});