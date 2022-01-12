const getProduct = require("./get-product");
const getProducts = require("./get-products");

module.exports = {
  "/api/product/{id}": {
    ...getProduct,
  },
  "/api/product": {
    ...getProducts,
  },
};
