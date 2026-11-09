const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownOptions = document.getElementById('dropdownOptions');
const customDropdown = document.getElementById('customDropdown');

dropdownBtn.addEventListener('click', () => {
  dropdownOptions.classList.toggle('show');
});

dropdownOptions.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    dropdownBtn.textContent = e.target.textContent;
    dropdownOptions.classList.remove('show');
  }
});

document.addEventListener('click', (e) => {
  if (!customDropdown.contains(e.target)) {
    dropdownOptions.classList.remove('show');
  }
}, { capture: true });
