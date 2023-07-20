const {
  FixedPriceProduct,
  VariablePriceProduct,
  CompositeProduct,
} = require("../models/Product.js");

const products = [];

function addFixedPriceProduct(req, res) {
  const { name, price } = req.body;
  const product = new FixedPriceProduct(name, price);
  products.push(product);
  res
    .status(201)
    .json({ message: "Producto de precio fijo agregado exitosamente" });
}

function addVariablePriceProduct(req, res) {
  const { name, unitPrice, type, value, totalPriceVariable } = req.body;
  const product = new VariablePriceProduct(
    name,
    unitPrice,
    type,
    value,
    totalPriceVariable
  );
  products.push(product);
  res
    .status(201)
    .json({ message: "Producto de precio variable agregado exitosamente" });
}

function addCompositeProduct(req, res) {
  const {
    name,
    products: compositeProducts,
    price,
    discount,
    totalPrice,
  } = req.body;
  const compositeProduct = new CompositeProduct(
    name,
    price,
    compositeProducts,
    discount,
    totalPrice
  );
  products.push(compositeProduct);
  res.status(201).json({ message: "Producto compuesto agregado exitosamente" });
}

function getAllProducts(req, res) {
  res.status(200).json(products);
}

module.exports = {
  addFixedPriceProduct,
  addVariablePriceProduct,
  addCompositeProduct,
  getAllProducts,
};
