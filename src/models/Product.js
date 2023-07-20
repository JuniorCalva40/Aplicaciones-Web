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
  constructor(name, unitPrice, type, value) {
    super(name);
    this.unitPrice = unitPrice;
    this.type = type;
    this.value = value;
    this.totalPrice = this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    if (this.type === "cantidad") {
      return this.unitPrice * this.value;
    } else if (this.type === "longitud") {
      return this.unitPrice * this.value;
    } else {
      throw new Error('El Tipo Debe ser "cantidad" o "longitud".');
    }
  }
}

class CompositeProduct extends Product {
  constructor(name, price, products, discount) {
    super(name);
    this.products = products;
    this.price = price;
    this.discount = discount;
    this.totalPriceVariable = this.calculateDiscountedPrice();
  }

  //Metodo calcular precio total
  calculateDiscountedPrice() {
    let totalPrice = 0;

    for (const product of this.products) {
      totalPrice += product.price;
    }

    const discountedPrice = totalPrice - (totalPrice * this.discount) / 100;
    return discountedPrice;
  }
}

module.exports = {
  FixedPriceProduct,
  VariablePriceProduct,
  CompositeProduct,
};
