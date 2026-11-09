const productInput = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');

addBtn.addEventListener('click', () => {
  const productName = productInput.value.trim();
  if (!productName) return;

  const li = document.createElement('li');
  li.className = 'product-item';
  li.innerHTML = `
    <span class="product-name">${productName}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  productList.appendChild(li);
  productInput.value = '';
});

productList.addEventListener('click', (e) => {
  const target = e.target;
  const li = target.closest('.product-item');

  if (target.classList.contains('delete-btn')) {
    li.remove();
  }

  if (target.classList.contains('edit-btn')) {
    const nameSpan = li.querySelector('.product-name');
    const currentName = nameSpan.textContent;

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'edit-input';
    editInput.value = currentName;

    li.insertBefore(editInput, nameSpan);
    nameSpan.style.display = 'none';
    editInput.focus();

    editInput.addEventListener('blur', function () {
      const newName = this.value.trim() || currentName;
      nameSpan.textContent = newName;
      nameSpan.style.display = 'inline';
      this.remove();
    });

    editInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        this.blur();
      }
    });
  }
});
