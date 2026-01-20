// normal Object to class Object

let products;

export function productClassObj(products) {
  //product class
  class Product {
    constructor(id, title, description, price, thumbnail, stock) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.stock = stock;
    }
  }

  const productsObj = products.map(
    ({ id, title, description, price, thumbnail, stock }) => {
      return new Product(id, title, description, price, thumbnail, stock);
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

      if (!this.items.get(productId).inStock) return;
      const stock = this.items.get(productId).product.stock;
      const quantity = this.items.get(productId).quantity;
      this.items.get(productId).inStock = stock - quantity <= 0 ? false : true;
    } else {
      const product = products.find((p) => p.id == productId);
      this.items.set(productId, {
        product,
        quantity: 1,
        inStock: product.stock > 1 ? true : false,
      });
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

  getOutOfStock() {
    return Array.from(this.items.values())
      .filter(({ inStock }) => !inStock)
      .map(({ product }) => product.id);
  }
}
