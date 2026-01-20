// normal Object to class Object

let products;

export function productClassObj(products) {
  //product class
  class Product {
    constructor(id, title, description, price, thumbnail) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
    }
  }

  const productsObj = products.map(
    ({ id, title, description, price, thumbnail }) => {
      return new Product(id, title, description, price, thumbnail);
    },
  );

  return productsObj;
}

export class Cart {
  constructor() {
    this.items = new Map();
    this.uniqueItems = new Set();
  }
  add(productId, products) {
    if (this.items.has(productId)) {
      this.items.get(productId).quantity += 1;
    } else {
      const product = products.find((p) => p.id == productId);

      this.items.set(productId, { product, quantity: 1 });
      this.uniqueItems.add(productId);
    }
  }

  totalPrice() {
    const total = Array.from(this.items.values()).reduce(
      (acc, { product, quantity }) => acc + product.price * quantity,
      0,
    );
    return total;
  }

  allItems() {
    return Array.from(this.items.values());
  }
}
