

async function loadTarifs() {
  const response = await fetch(`/CrocMignon/data_static/tarifs.json`);
  const tarifs = await response.json();

  const tbody = document.querySelector('#userTable tbody');
  const filterInput = document.getElementById('filter');

  const noResultsMsg = document.getElementById('no-results');

  function renderTable(data) {
    tbody.innerHTML = '';

    if (data.length === 0) {
      noResultsMsg.style.display = 'block';
      return;
    }

    noResultsMsg.style.display = 'none';

    tbody.innerHTML = data.map(dog => `
      <tr>
        <td>${dog.race}</td>
        <td>${dog.bain??""}</td>
        <td>${dog.coupe??""}</td>
        <td>${dog.tondeuse??""}</td>
        <td>${dog.epilation??""}</td>
        <td>${dog.tontetotal??""}</td>
      </tr>
    `).join('');
  }

  filterInput.addEventListener('input', () => {
    const filter = filterInput.value.toLowerCase();
    const filtered = tarifs.filter(u => u.race.toLowerCase().includes(filter));
    renderTable(filtered);
  });

  renderTable(tarifs);
}

loadTarifs();