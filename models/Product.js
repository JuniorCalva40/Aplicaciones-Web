// models/Product.js

class Product {
  constructor(name) {
    this.name = name;
  }
}

class FixedPriceProduct extends Product {
  constructor(name, price) {
    super(name);
    this.price = price;
  }
}

class VariablePriceProduct extends Product {
  constructor(name) {
    super(name);
    this.price = null;
  }
}

class CompositeProduct extends Product {
  constructor(name, products, discount) {
    super(name);
    this.products = products;
    this.discount = discount;
  }
}

module.exports = {
  FixedPriceProduct,
  VariablePriceProduct,
  CompositeProduct,
};
