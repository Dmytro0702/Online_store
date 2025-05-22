const CART_KEY = 'shop_cart';
let cart = {};

export function initCart(products) {
  const saved = localStorage.getItem(CART_KEY);
  cart = saved ? JSON.parse(saved) : {};
  renderCart(products);
}

export function addToCart(id, products) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart(products);
  window.dispatchEvent(new Event('addedToCart'));
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function renderCart(products) {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!container || !totalEl) return;

  const entries = Object.entries(cart);
  if (entries.length === 0) {
    container.innerHTML = '<p>Your cart is empty</p>';
    totalEl.textContent = '£0.00';
    return;
  }

  const items = entries.map(([id, qty]) => {
    const p = products.find(p => p.id === Number(id));
    const subtotal = qty * p.price;
    return { ...p, qty, subtotal };
  });

  container.innerHTML = items.map(item => `
    <div class="cart-panel__item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="info">
        <span class="name">${item.name}</span>
        <span class="price">£${item.price.toFixed(2)}</span>
        <div class="qty-controls">
          <button class="decrease" data-id="${item.id}">-</button>
          <span class="qty">${item.qty}</span>
          <button class="increase" data-id="${item.id}">+</button>
        </div>
        <button class="remove-btn" data-id="${item.id}">Remove</button>
      </div>
    </div>
  `).join('');

  const total = items.reduce((sum, item) => sum + item.subtotal, 0);
  totalEl.textContent = `£${total.toFixed(2)}`;

  container.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      delete cart[id];
      saveCart();
      renderCart(products);
    });
  });

  container.querySelectorAll('.increase').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      cart[id]++;
      saveCart();
      renderCart(products);
    });
  });

  container.querySelectorAll('.decrease').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (cart[id] > 1) {
        cart[id]--;
      } else {
        delete cart[id];
      }
      saveCart();
      renderCart(products);
    });
  });
}

