const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/products", productController.allProducts);

router.get("/products/:id", productController.getProductById);

router.post("/products", productController.addNewProduct);

router.delete("/products/:id", productController.deleteProductById);

router.patch("/products/:id", productController.updateProduct);

module.exports = router;
