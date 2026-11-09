const searchInput = document.getElementById('searchInput');
const tableBody = document.querySelector('#studentTable tbody');
const rows = tableBody.querySelectorAll('tr');
const noResultsMessage = document.getElementById('noResults');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  let matchCount = 0;

  rows.forEach(row => {
    const rowData = row.textContent.toLowerCase();

    if (rowData.includes(query)) {
      row.style.display = '';
      matchCount++;
    } else {
      row.style.display = 'none';
    }
  });

  if (matchCount === 0) {
    noResultsMessage.style.display = 'block';
  } else {
    noResultsMessage.style.display = 'none';
  }
});
