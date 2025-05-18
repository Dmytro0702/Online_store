import { renderProducts } from './productList.js';

export function initFilter(products) {
  const searchInput = document.querySelector('#search-input');
  const categoryButtons = document.querySelectorAll('.controls__category');
  const priceRange = document.querySelector('#filter-price');
  const priceValue = document.querySelector('#filter-price-value');

  let searchTerm = '';
  let selectedCategory = 'All';
  let maxPrice = Number(priceRange?.value || 200);

  function applyFilters() {
    const filtered = products
      .filter(p => p.name.toLowerCase().includes(searchTerm))
      .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
      .filter(p => p.price <= maxPrice);

    renderProducts(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchTerm = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCategory = btn.dataset.category;
      applyFilters();
    });
  });

  if (priceRange) {
    priceRange.addEventListener('input', e => {
      maxPrice = Number(e.target.value);
      if (priceValue) {
        priceValue.textContent = `Value: £${maxPrice}`;
      }
      applyFilters();
    });
  }

  applyFilters();
}
