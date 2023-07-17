const express = require("express");
const router = express.Router();
const productController = require("../controllers/Product.controller.js");

router.post("/products/fixed", productController.addFixedPriceProduct);
router.post("/products/variable", productController.addVariablePriceProduct);
router.post("/products/composite", productController.addCompositeProduct);
router.get("/products", productController.getAllProducts);

module.exports = router;
