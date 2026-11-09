const textBox = document.getElementById('textBox');
const charCount = document.getElementById('charCount');
const resetBtn = document.getElementById('resetBtn');
const MAX_CHARS = 100;

textBox.addEventListener('keydown', (e) => {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
  if (textBox.value.length >= MAX_CHARS && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
});

textBox.addEventListener('input', () => {
  const currentLength = textBox.value.length;
  const remaining = MAX_CHARS - currentLength;

  charCount.textContent = remaining;
  charCount.className = '';

  if (remaining <= 0) {
    charCount.classList.add('danger');
  } else if (remaining <= 20) {
    charCount.classList.add('warning');
  }
});

resetBtn.addEventListener('click', () => {
  textBox.value = '';
  charCount.textContent = MAX_CHARS;
  charCount.className = '';
});
