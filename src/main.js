import { renderProducts } from './productList.js';
import { initFilter }     from './filter.js';
import { initCart, addToCart } from './cart.js';

let products = [];

fetch('../src/products.json')
  .then(res => res.json())
  .then(data => {
    products = data;

    
    const productListEl = document.getElementById('product-list');
    if (productListEl) {
      renderProducts(products);
      initFilter(products);

      productListEl.addEventListener('click', e => {
        const btn = e.target.closest('.product-card__add-btn');
        if (!btn) return;
        addToCart(Number(btn.dataset.id), products);
      });
    }

    initCart(products);

    
    const cartIconBtn  = document.getElementById('cartIconBtn');
    const cartPanel    = document.getElementById('cartPanel');
    const cartOverlay  = document.getElementById('cartOverlay');
    const cartCloseBtn = document.getElementById('cartCloseBtn');

    if (cartIconBtn && cartPanel && cartOverlay && cartCloseBtn) {
      cartIconBtn.addEventListener('click', () => {
        cartPanel.classList.add('open');
        cartOverlay.style.display = 'block';
      });
      cartCloseBtn.addEventListener('click', () => {
        cartPanel.classList.remove('open');
        cartOverlay.style.display = 'none';
      });
      cartOverlay.addEventListener('click', () => {
        cartPanel.classList.remove('open');
        cartOverlay.style.display = 'none';
      });
    }
  })
  .catch(error => console.error('Error loading data or initializing app:', error));
