const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('regName');
const emailInput = document.getElementById('regEmail');
const passwordInput = document.getElementById('regPassword');
const successMsg = document.getElementById('successMsg');

function showError(inputElement, errorElementId) {
  inputElement.classList.add('input-error');
  document.getElementById(errorElementId).classList.add('visible');
}

function clearError(inputElement, errorElementId) {
  inputElement.classList.remove('input-error');
  document.getElementById(errorElementId).classList.remove('visible');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.style.display = 'none';
  let isValid = true;

  if (nameInput.value.trim() === '') {
    showError(nameInput, 'errName');
    isValid = false;
  }

  if (!emailInput.value.includes('@')) {
    showError(emailInput, 'errEmail');
    isValid = false;
  }

  if (passwordInput.value.length < 6) {
    showError(passwordInput, 'errPassword');
    isValid = false;
  }

  if (isValid) {
    successMsg.style.display = 'block';
    form.reset();
  }
});

form.addEventListener('input', (e) => {
  if (e.target === nameInput && nameInput.value.trim() !== '') {
    clearError(nameInput, 'errName');
  }
  if (e.target === emailInput && emailInput.value.includes('@')) {
    clearError(emailInput, 'errEmail');
  }
  if (e.target === passwordInput && passwordInput.value.length >= 6) {
    clearError(passwordInput, 'errPassword');
  }
});
