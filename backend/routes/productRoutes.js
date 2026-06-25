const express = require("express");

const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", authMiddleware, createProduct);

module.exports = router;
