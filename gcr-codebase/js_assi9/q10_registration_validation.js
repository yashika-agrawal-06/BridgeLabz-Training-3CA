$(document).ready(function () {
  // Simulated database of existing emails to check uniqueness
  const registeredEmails = [
    "admin@example.com",
    "user@domain.com",
    "test@company.org",
    "sarah@web.io",
    "john@mail.com"
  ];

  // Helper to apply/remove red border dynamically using .css()
  function setFieldValidity($field, isValid, errorSelector, message) {
    if (!isValid) {
      $field.css("border", "2px solid #dc2626");
      $(errorSelector).text(message);
    } else {
      $field.css("border", "2px solid #16a34a");
      $(errorSelector).text("");
    }
  }

  $("#reg-form").on("submit", function (e) {
    e.preventDefault();
    $("#success-banner").hide();

    let isFormValid = true;

    // 1. Validate Name (must not be empty)
    const $name = $("#full-name");
    const nameVal = $name.val().trim();
    if (nameVal === "") {
      setFieldValidity($name, false, "#err-name", "Name is required.");
      isFormValid = false;
    } else {
      setFieldValidity($name, true, "#err-name", "");
    }

    // 2. Validate Email (valid format AND uniqueness)
    const $email = $("#email");
    const emailVal = $email.val().trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailVal)) {
      setFieldValidity($email, false, "#err-email", "Enter a valid email address.");
      isFormValid = false;
    } else if (registeredEmails.includes(emailVal)) {
      setFieldValidity($email, false, "#err-email", "This email is already registered.");
      isFormValid = false;
    } else {
      setFieldValidity($email, true, "#err-email", "");
    }

    // 3. Validate Password (minimum 8 characters)
    const $pass = $("#password");
    const passVal = $pass.val();
    if (passVal.length < 8) {
      setFieldValidity($pass, false, "#err-pass", "Password must be at least 8 characters long.");
      isFormValid = false;
    } else {
      setFieldValidity($pass, true, "#err-pass", "");
    }

    // Extra check: Confirm password matches
    const $confirm = $("#confirm-password");
    if ($confirm.val() !== passVal || $confirm.val() === "") {
      setFieldValidity($confirm, false, "#err-confirm", "Passwords do not match.");
      isFormValid = false;
    } else {
      setFieldValidity($confirm, true, "#err-confirm", "");
    }

    // 4. Show success message if all validations pass
    if (isFormValid) {
      registeredEmails.push(emailVal); // Add new email to simulated list
      $("#success-banner").fadeIn(300);
      this.reset();
      $("input").css("border", "2px solid #cbd5e1");
    }
  });
});
