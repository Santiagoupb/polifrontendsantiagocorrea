const servicesGrid = document.querySelector('#services-grid');
const servicesStatus = document.querySelector('#services-status');
const searchInput = document.querySelector('#service-search');
const favoritesCount = document.querySelector('#favorites-count');

const FAVORITES_KEY = 'politrips-favorites';

let services = [];
let favorites = getFavorites();

init();

async function init() {
  updateFavoritesCount();

  if (!servicesGrid || !servicesStatus) {
    return;
  }

  try {
    const response = await fetch('data/services.json');

    if (!response.ok) {
      throw new Error('No se pudieron cargar los servicios.');
    }

    services = await response.json();
    renderServices(services);
    servicesStatus.textContent = `${services.length} servicios disponibles.`;
  } catch (error) {
    servicesStatus.textContent = 'Ocurrio un error al cargar los servicios.';
    servicesGrid.innerHTML = `
      <div class="empty-state">
        Intenta abrir el proyecto desde un servidor local para habilitar la carga del archivo JSON.
      </div>
    `;
  }

  searchInput?.addEventListener('input', handleSearch);
}

function handleSearch(event) {
  const query = event.target.value.trim().toLowerCase();
  const filteredServices = services.filter((service) => {
    return (
      service.name.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query)
    );
  });

  renderServices(filteredServices);
  servicesStatus.textContent = query
    ? `${filteredServices.length} resultado(s) para "${query}".`
    : `${services.length} servicios disponibles.`;
}

function renderServices(list) {
  if (!list.length) {
    servicesGrid.innerHTML = `
      <div class="empty-state">
        No encontramos servicios con ese criterio de busqueda.
      </div>
    `;
    return;
  }

  servicesGrid.innerHTML = list
    .map((service) => {
      const isFavorite = favorites.includes(service.id);

      return `
        <article class="service-card">
          <div class="service-card-header">
            <div>
              <h3>${service.name}</h3>
              <span class="service-tag">${service.category}</span>
            </div>
            <button
              class="favorite-button ${isFavorite ? 'is-favorite' : ''}"
              type="button"
              data-service-id="${service.id}"
              aria-label="${isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}"
              aria-pressed="${isFavorite}"
            >
              ${isFavorite ? '★' : '☆'}
            </button>
          </div>
          <p>${service.description}</p>
          <div class="service-meta">
            <span class="service-price">${service.price}</span>
            <a class="btn btn-outline" href="contact.html">Solicitar</a>
          </div>
        </article>
      `;
    })
    .join('');

  servicesGrid.querySelectorAll('.favorite-button').forEach((button) => {
    button.addEventListener('click', () => {
      toggleFavorite(button.dataset.serviceId);
    });
  });
}

function toggleFavorite(serviceId) {
  if (!serviceId) {
    return;
  }

  if (favorites.includes(serviceId)) {
    favorites = favorites.filter((favoriteId) => favoriteId !== serviceId);
  } else {
    favorites = [...favorites, serviceId];
  }

  saveFavorites(favorites);
  updateFavoritesCount();
  handleSearch({ target: { value: searchInput?.value || '' } });
}

function updateFavoritesCount() {
  if (favoritesCount) {
    favoritesCount.textContent = favorites.length.toString();
  }
}

function getFavorites() {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveFavorites(value) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(value));
}
