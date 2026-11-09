const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const selectedTheme = e.target.getAttribute('data-target-theme');
    document.body.setAttribute('data-theme', selectedTheme);
  });
});

document.body.setAttribute('data-theme', 'light');
