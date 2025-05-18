export function renderProducts(products) {
  const container = document.querySelector('#product-list');
  if (!container) return;

  const markup = products.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" class="product-card__image" />
      <div class="product-card__info">
        <h3 class="product-card__title">${p.name}</h3>
        <p class="product-card__desc">${p.description}</p>
        <p class="stars">${'★'.repeat(p.rating)}</p>
        <p class="tag">${p.category}</p>
        <div class="product-card__footer">
          <span class="product-card__price">£${p.price.toFixed(2)}</span>
          <button class="product-card__add-btn" data-id="${p.id}">Add</button>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = markup;
}
