document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar');
  const header = document.querySelector('header');

  // Establecer el estado inicial
  if (sidebar.classList.contains('collapsed')) {
    header.classList.add('shrink'); // Si el sidebar está colapsado, contraer el header
  } else {
    header.classList.remove('shrink'); // Si no, expandir el header
  }
});

document.getElementById('menu-toggle').addEventListener('click', function () {
  const sidebar = document.querySelector('.sidebar');
  const header = document.querySelector('header');

  sidebar.classList.toggle('expanded');
  sidebar.classList.toggle('collapsed');

  // Cambiar la clase del header según el estado del sidebar
  if (sidebar.classList.contains('collapsed')) {
    header.classList.add('shrink'); // Clase para contraer el header
  } else {
    header.classList.remove('shrink'); // Clase para expandir el header
  }
});

// JavaScript para filtrar videos por categoría o término de búsqueda
document.getElementById('search').addEventListener('input', filterVideos);
document.getElementById('category-filter').addEventListener('change', filterVideos);

function filterVideos() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  const categoryValue = document.getElementById('category-filter').value;
  const videoItems = document.querySelectorAll('.video-item');

  videoItems.forEach(item => {
    const title = item.querySelector('h3').textContent.toLowerCase();
    const category = item.dataset.category;

    if (
      (categoryValue === 'all' || category === categoryValue) &&
      title.includes(searchValue)
    ) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
    // JavaScript to filter videos by category or search term
    document.getElementById('search').addEventListener('input', filterVideos);
    document.getElementById('category-filter').addEventListener('change', filterVideos);

    function filterVideos() {
      const searchValue = document.getElementById('search').value.toLowerCase();
      const categoryValue = document.getElementById('category-filter').value;
      const videoItems = document.querySelectorAll('.video-item');

      videoItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const category = item.dataset.category;

        if (
          (categoryValue === 'all' || category === categoryValue) &&
          title.includes(searchValue)
        ) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }

