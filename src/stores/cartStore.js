import { writable, derived } from "svelte/store";

const store = writable(_getStorageCart());

export const cartTotal = derived(store, ($store) => {
  const total = $store.reduce((a, b) => a + b.amount * b.price, 0);
  return total.toFixed(2);
});

function _remove(id, items) {
  return items.filter((item) => item.id !== id);
}

function _toggleAmount(id, items, increase) {
  const item = items.find((item) => item.id === id);
  if (item) {
    if (increase) {
      item.amount++;
    } else {
      item.amount--;
    }
  }

  return item.amount > 0 ? items : _remove(id, items);
}

function _getStorageCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

export function removeItem(id) {
  store.update((storeValue) => {
    return _remove(id, storeValue);
  });
}

export function increaseAmount(id) {
  store.update((storeValue) => {
    return _toggleAmount(id, storeValue, true);
  });
}
export function decreaseAmount(id) {
  store.update((storeValue) => {
    return _toggleAmount(id, storeValue, false);
  });
}

export function addToCart(item) {
  store.update((storeValue) => {
    const itemInCart = storeValue.find(
      (itemInCart) => itemInCart.id === item.id
    );
    if (itemInCart) {
      itemInCart.amount++;
    } else {
      item.amount = 1;
    }
    return itemInCart ? storeValue : [...storeValue, item];
  });
}

export function setStorageCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default store;
