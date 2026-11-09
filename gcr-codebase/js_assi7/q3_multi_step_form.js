const steps = document.querySelectorAll('.step');
let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });
}

function validateStep() {
  if (currentStep === 0) {
    const name = document.getElementById('nameInput').value;
    const error = document.getElementById('nameError');
    if (name.trim() === '') {
      error.textContent = 'Name is required.';
      return false;
    }
    error.textContent = '';
    return true;
  }

  if (currentStep === 1) {
    const email = document.getElementById('emailInput').value;
    const error = document.getElementById('emailError');
    if (!email.includes('@')) {
      error.textContent = 'Valid email is required.';
      return false;
    }
    error.textContent = '';
    return true;
  }

  if (currentStep === 2) {
    const password = document.getElementById('passwordInput').value;
    const error = document.getElementById('passwordError');
    if (password.length < 6) {
      error.textContent = 'Password must be at least 6 characters.';
      return false;
    }
    error.textContent = '';
    return true;
  }

  return true;
}

document.getElementById('formContainer').addEventListener('click', (e) => {
  if (e.target.classList.contains('next-btn')) {
    if (validateStep()) {
      currentStep++;
      showStep(currentStep);
    }
  } else if (e.target.classList.contains('back-btn')) {
    currentStep--;
    showStep(currentStep);
  } else if (e.target.id === 'submitBtn') {
    if (validateStep()) {
      currentStep++;
      const name = document.getElementById('nameInput').value;
      const email = document.getElementById('emailInput').value;
      document.getElementById('summaryText').innerHTML = `Name: ${name}<br>Email: ${email}`;
      showStep(currentStep);
    }
  }
});
