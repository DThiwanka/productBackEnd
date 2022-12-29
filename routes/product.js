const express = require("express");
const router = express.Router();
const {
  createProduct,
  readProduct,
  readProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

router.post("/product", createProduct);

router.get("/product", readProduct);

router.get("/product/:productId", readProductById);

router.put("/product/:productId", updateProduct);

router.delete("/product/:productId", deleteProduct);

module.exports = router;