"use strict";

// Dynamically creating the form for browser console testing
document.body.innerHTML = `
  <form id="studentForm" style="display:flex; flex-direction:column; max-width:300px; gap:10px; font-family:sans-serif;">
    <h3>Student Registration</h3>
    <input type="text" id="name" placeholder="Name" />
    <input type="email" id="email" placeholder="Email" />
    <input type="text" id="phone" placeholder="Phone (10 digits)" />
    <input type="password" id="password" placeholder="Password" />
    <button type="submit">Submit</button>
    <div id="errorMsg" style="color:red; font-size:12px;"></div>
  </form>
`;

const form = document.getElementById("studentForm");
const errorMsg = document.getElementById("errorMsg");

// RegExp Patterns
const patterns = {
  name: /^[a-zA-Z\s]+$/, // Only alphabets and spaces
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email format
  phone: /^\d{10}$/, // Exactly 10 digits
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/ // 1 Upper, 1 Num, 1 Special
};

// Validation function
function validateField(inputElement, regex, errorMessage) {
  if (regex.test(inputElement.value)) {
    inputElement.style.border = "2px solid green";
    return true;
  } else {
    inputElement.style.border = "2px solid red";
    errorMsg.innerHTML += errorMessage + "<br>";
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  errorMsg.innerHTML = ""; // Clear previous errors

  const isNameValid = validateField(document.getElementById("name"), patterns.name, "Name must contain only alphabets.");
  const isEmailValid = validateField(document.getElementById("email"), patterns.email, "Invalid email format.");
  const isPhoneValid = validateField(document.getElementById("phone"), patterns.phone, "Phone must be exactly 10 digits.");
  const isPasswordValid = validateField(document.getElementById("password"), patterns.password, "Password needs 1 uppercase, 1 number, 1 special character.");

  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
    errorMsg.style.color = "green";
    errorMsg.innerHTML = "Form successfully submitted!";
  } else {
    errorMsg.style.color = "red";
  }
});
