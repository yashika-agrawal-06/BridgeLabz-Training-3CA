const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    modalImg.src = e.target.src;
    modal.style.display = 'flex';
  }
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modalImg.addEventListener('click', (e) => {
  e.stopPropagation();
});
