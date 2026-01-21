import { renderProducts } from "./renderProducts.js";
import { productClassObj, Cart } from "./setsAndMaps.js";
import { renderCart } from "./renderCart.js";
import { cartSave, loadCartItems } from "./cartSave.js";
import { disableCartBtn } from "./disableCartButton.js";

const productContainer = document.querySelector("#product-container");

const fetchMessage = document.querySelector("#fetchMessage");

const loadingELe = document.querySelector("#loadingELe");

export const cart = new Cart();
let products;

// fetch Products

async function fetchApi(searchVal) {
  try {
    loading();
    const res = await fetch(
      `https://dummyjson.com/products${searchVal ? `/search?q=${searchVal}&` : ``}?limit=10`,
    );

    if (!res.ok) {
      throw new Error("error while fetching products");
    }
    const data = await res.json();
    products = await productClassObj(data.products);

    loading();
    renderProducts(data.products);
    loadCartItems(cart);
    disableCartBtn();
    domMessage("");
  } catch (error) {
    domMessage(error.message || "unknown fetching error");
  }
}

// loading

function loading() {
  loadingELe.classList.toggle("hidden");
}

// error message

function domMessage(message) {
  fetchMessage.textContent = message;
}

fetchApi();

// search Debounce

const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("input", debounceFn(fetchApi, 1000));

function debounceFn(fn, delayTime) {
  let timerId = null;
  return function (e) {
    const searchVal = e.target.value;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(searchVal);
    }, delayTime);
  };
}

// add to cart

productContainer.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  const productId = Number(e.target.dataset.id);

  cart.add(productId, products);

  cartSave(cart.allItems());
  renderCart(cart);

  if (cart.getOutOfStock().length) {
    disableCartBtn();
  }
});

// toggle cart

const cartContainer = document.querySelector("#cartContainer");

const cartShowBtn = document.querySelector("#cartShowBtn");

const cartPanelCloseBtn = document.querySelector("#cartPanelCloseBtn");

cartShowBtn.addEventListener("click", () => {
  if (cartContainer.classList.contains("translate-x-full")) {
    cartContainer.classList.replace("translate-x-full", "translate-x-0");
  } else {
    cartContainer.classList.replace("translate-x-0", "translate-x-full");
  }
});

cartPanelCloseBtn.addEventListener("click", () => {
  cartContainer.classList.replace("translate-x-0", "translate-x-full");
});
