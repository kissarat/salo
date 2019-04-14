const config = {};

try {
  const local = require('./config.local');
  Object.assign(config, local);
}
catch (err) {
  console.error("Local configurations not found");
}

module.exports = config;
