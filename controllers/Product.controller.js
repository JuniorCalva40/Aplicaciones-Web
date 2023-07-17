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
  res.status(201).json({ message: "Precio Agregado Exitosamente" });
}

function addVariablePriceProduct(req, res) {
  const { name } = req.body;
  const product = new VariablePriceProduct(name);
  products.push(product);
  res
    .status(201)
    .json({ message: "Producto de precio variable agregado con éxito" });
}

function addCompositeProduct(req, res) {
  const { name, products, discount } = req.body;
  const compositeProduct = new CompositeProduct(name, products, discount);
  products.push(compositeProduct);
  res.status(201).json({ message: "Producto compuesto añadido con éxito" });
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
