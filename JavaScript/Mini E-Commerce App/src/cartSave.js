import { renderCart } from "./renderCart.js";

export function cartSave(cartObj) {
  const normalData = cartObj.map(({ product, quantity, inStock }) => {
    return {
      product,
      quantity,
      inStock,
    };
  });
  const stringifyData = JSON.stringify(normalData);

  localStorage.setItem("products", stringifyData);
}

export function loadCartItems(cartObj) {
  if (!localStorage.getItem("products")) return;

  const products = JSON.parse(localStorage.getItem("products"));
  cartObj.items.clear();
  cartObj.uniqueItems.clear();

  products.forEach(({ product, quantity, inStock }) => {
    cartObj.items.set(product.id, { product, quantity, inStock });
    cartObj.uniqueItems.add(product.id);
  });

  renderCart(cartObj);
}
