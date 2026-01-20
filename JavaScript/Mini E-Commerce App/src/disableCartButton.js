import { cart } from "./script.js";

export function disableCartBtn() {
  const cartBtns = document.querySelectorAll("#addToCartBtn");

  const ids = cart.getOutOfStock();
  for (let i = 0; i < cartBtns.length; i++) {
    if (ids.includes(Number(cartBtns[i].dataset.id))) {
      cartBtns[i].disabled = true;
      cartBtns[i].textContent = "Out Of Stock";
      cartBtns[i].classList.replace("addToCartBtn", "addToCartBtn-outOfStock");
    }
  }
}
