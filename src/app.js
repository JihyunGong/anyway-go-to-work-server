const express = require("express");

const loaders = require("./loaders");
const index = require("./routes/index");
const {
  unknownPageHandler,
  errorHandler,
} = require("./middlewares/errorHandler");

const app = express();

(async () => {
  await loaders(app);

  app.use("/", index);

  app.use(unknownPageHandler);
  app.use(errorHandler);
})();

module.exports = app;
