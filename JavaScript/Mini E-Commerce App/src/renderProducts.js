export function renderProducts(products) {
  const productContainer = document.querySelector("#product-container");

  productContainer.innerHTML = "";

  products.forEach(({ id, title, description, price, thumbnail }) => {
    // card

    const productCard = document.createElement("div");

    productCard.className = "shadow-md productCard";

    const productImg = document.createElement("img");
    productImg.src = thumbnail;
    productImg.alt = title || "product image";
    productImg.style.width = "100%";

    // title

    const productTitle = document.createElement("h3");
    productTitle.textContent = title.slice(0, 15);
    productTitle.classList.add("h-10");

    // price

    const priceEle = document.createElement("p");
    priceEle.style.color = "rgba(15, 142, 0, 0.8)";
    priceEle.textContent = `$${price}`;

    // description

    const productDescription = document.createElement("p");
    productDescription.textContent = description;
    productDescription.classList.add("h-10");
    productDescription.style.fontSize = "0.8rem";
    productDescription.style.overflowY = "hidden";

    // button container

    const buttonsDivEle = document.createElement("div");
    buttonsDivEle.classList.add("flex", "justify-end", "items-center");

    // cart button

    const productCartBtn = document.createElement("button");
    productCartBtn.textContent = "Add To Cart";
    productCartBtn.style.fontSize = "0.8rem";
    productCartBtn.style.marginTop = "1rem";
    productCartBtn.classList.add("bg-yellow-500", "shadow-md");
    productCartBtn.style.padding = "0.5rem";
    productCartBtn.style.borderRadius = "1rem";
    productCartBtn.dataset.id = id;

    // append

    productCard.appendChild(productImg);

    productCard.appendChild(productTitle);

    productCard.appendChild(priceEle);

    productCard.appendChild(productDescription);

    buttonsDivEle.appendChild(productCartBtn);

    productCard.appendChild(buttonsDivEle);

    productContainer.appendChild(productCard);
  });
}
