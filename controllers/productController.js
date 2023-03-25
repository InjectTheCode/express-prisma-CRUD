const db = require("../db");
const productService = require("../services/productService");

const productController = {
  allProducts: async (req, res, next) => {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) {
      next(error);
    }
  },
  getProductById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const product = await productService.getProById(+id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  },
  addNewProduct: async (req, res, next) => {
    try {
      const newProduct = await productService.createProduct({
        ...req.body,
      });
      const result = {
        message: "Your Product has been added!",
        data: newProduct,
      };
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  deleteProductById: async (req, res, next) => {
    try {
      const id = req.params.id;
      await productService.deleteProduct(+id);
      const result = {
        message: `Product ${id} has been deleted`,
      };
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  updateProduct: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const product = await productService.update(+id, data);
      const result = {
        message: `Product ${id} has been updated`,
        data: product,
      };
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = productController;
