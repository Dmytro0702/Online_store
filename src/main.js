import { renderProducts } from './productList.js';
import { initFilter } from './filter.js';
import { initCart, addToCart } from './cart.js';

let products = [];

fetch('../src/products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts(products);
    initFilter(products);
    initCart(products);

    const listContainer = document.querySelector('#product-list');
    if (listContainer) {
      listContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.product-card__add-btn');
        if (btn) {
          const id = Number(btn.dataset.id);
          addToCart(id, products);
        }
      });
    }

    const cartPanel = document.getElementById('cartPanel');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartCloseBtn = document.getElementById('cartCloseBtn');
    const cartIconBtn = document.getElementById('cartIconBtn');

    cartIconBtn?.addEventListener('click', () => {
      cartPanel.classList.add('open');
      cartOverlay.style.display = 'block';
    });

    cartCloseBtn?.addEventListener('click', () => {
      cartPanel.classList.remove('open');
      cartOverlay.style.display = 'none';
    });

    cartOverlay?.addEventListener('click', () => {
      cartPanel.classList.remove('open');
      cartOverlay.style.display = 'none';
    });
  })
  .catch(error => {
    console.error('Failed to load JSON:', error);
  });
