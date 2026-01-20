export function renderCart(cart) {
  console.log(cart);

  const cartItems = document.querySelector("#cartItems");

  const totalPriceEle = document.querySelector("#totalPriceEle");

  totalPriceEle.textContent = `$${cart.totalPrice().toFixed(2)}`;

  const cartItemsContainer = document.querySelector("#cartItemsContainer");

  cartItemsContainer.innerHTML = "";

  cartItems.textContent = cart.uniqueItems.size;

  const allItems = cart.allItems();

  allItems.forEach(({ product, quantity }) => {
    const { id, title, description, price, thumbnail } = product;

    const liEle = document.createElement("li");
    const divEle = document.createElement("div");
    divEle.className = "cartContainer";

    // image container

    const imgDiv = document.createElement("div");
    imgDiv.style.width = "100px";

    // info container

    const infoDiv = document.createElement("div");

    infoDiv.classList.add("ms-5");

    // title
    const titleEle = document.createElement("p");
    titleEle.textContent = `${title.slice(0, 10)}...`;

    //image

    const imgEle = document.createElement("img");
    imgEle.src = thumbnail;
    imgEle.style.width = "100%";

    // price

    const priceEle = document.createElement("p");
    priceEle.textContent = `$${price.toFixed(2)}`;
    priceEle.style.color = "rgba(15, 142, 0, 0.8)";

    //quantity

    const qtyEle = document.createElement("p");
    qtyEle.textContent = `Quantity: ${quantity}`;
    qtyEle.style.marginTop = "1rem";

    imgDiv.appendChild(imgEle);
    infoDiv.appendChild(titleEle);
    infoDiv.appendChild(priceEle);
    infoDiv.appendChild(qtyEle);

    divEle.appendChild(imgDiv);
    divEle.appendChild(infoDiv);

    liEle.appendChild(divEle);
    cartItemsContainer.appendChild(liEle);
  });
}
