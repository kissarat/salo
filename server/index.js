const main = require("./main");
const {getOptions} = require("auxiliary/utilities");
const pkg = require("../package");
const config = require("../config");

process.title = pkg.name;

const [options, ...args] = getOptions();
Object.assign(config, options);

main(config, ...args)
    .then(function () {
      console.log(`Listen at ${config.port}`)
    })
    .catch(function (err) {
      console.error(err);
      process.exit();
    });

process.on("uncaughtException", function (err) {
  console.error(err);
  if ("EADDRINUSE" === err.code) {
    process.exit();
  }
});

// process.on("SIGINT", function () {
//   process.exit();
// });
