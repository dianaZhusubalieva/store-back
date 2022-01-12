const basicInfo = require("./basic-info");
const tags = require("./tags");
const servers = require("./server");
const components = require("./components");
const paths = require("./paths");

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...paths,
};
