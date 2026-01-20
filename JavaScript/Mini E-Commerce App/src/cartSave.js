import { renderCart } from "./renderCart.js";

export function cartSave(cartObj) {
  console.log(cartObj);
  const normalData = cartObj.map(({ product, quantity }) => {
    // const { id, title, description, price, thumbnail } = product;
    return {
      product,
      quantity,
    };
  });
  const stringifyData = JSON.stringify(normalData);

  localStorage.setItem("products", stringifyData);
}

export function loadCartItems(cartObj) {
  console.log(cartObj);

  if (!localStorage.getItem("products")) return;

  const products = JSON.parse(localStorage.getItem("products"));
  console.log(products);
  cartObj.items.clear();
  cartObj.uniqueItems.clear();

  products.forEach(({ product, quantity }) => {
    cartObj.items.set(product.id, { product, quantity });
    cartObj.uniqueItems.add(product.id);
  });

  renderCart(cartObj);
}
