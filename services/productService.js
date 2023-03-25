const db = require("../db.js");

const productService = {
  getAllProducts: async () => {
    try {
      return await db.category.findMany({
        include: {
          products: true,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getProById: async (id) => {
    return await db.product.findUnique({
      where: {
        id,
      },
    });
  },
  createProduct: async (data) => {
    try {
      const newProduct = await db.product.create({
        data,
      });
      return newProduct;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteProduct: async (id) => {
    try {
      const deleteProduct = await db.product.delete({
        where: { id },
      });
      return deleteProduct;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  update: async (id, data) => {
    try {
      const updateProduct = await db.product.update({
        where: { id },
        data,
      });
      return updateProduct;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = productService;
