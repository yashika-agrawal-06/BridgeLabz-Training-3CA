const box = document.getElementById('trackingBox');
const coordsDisplay = document.getElementById('coords');

box.addEventListener('mousemove', (e) => {
  coordsDisplay.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

box.addEventListener('dblclick', (e) => {
  const rect = box.getBoundingClientRect();
  const xInsideBox = e.clientX - rect.left;
  const yInsideBox = e.clientY - rect.top;

  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = `${xInsideBox}px`;
  dot.style.top = `${yInsideBox}px`;

  box.appendChild(dot);
});
