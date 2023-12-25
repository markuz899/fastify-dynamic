const Cache = require("node-cache");
const cache = new Cache({ stdTTL: 60 * 5 });

module.exports = {
  cache,
};
