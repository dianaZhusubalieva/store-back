const users = require("./users");
const products = require("./products");
// const comments = requi("./comments");

module.exports = {
  paths: {
    ...users,
    ...products,
    // ...comments,
  },
};
