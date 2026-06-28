const CART_KEY = 'clc-cart';

export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: { cart } }));
}

export function addToCart(product) {
  const cart = getCart();
  const key = `${product.id}-${product.size}`;
  const existing = cart.find(item => item.key === key);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, key, quantity: 1 });
  }
  saveCart(cart);
}

export function removeFromCart(key) {
  saveCart(getCart().filter(item => item.key !== key));
}

export function updateQuantity(key, quantity) {
  if (quantity <= 0) {
    removeFromCart(key);
    return;
  }
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
}

export function getCartCount() {
  return getCart().reduce((total, item) => total + item.quantity, 0);
}

export function getCartTotal() {
  return getCart().reduce((total, item) => total + item.price * item.quantity, 0);
}
