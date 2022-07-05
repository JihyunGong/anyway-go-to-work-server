const dbConnect = require("./mongoose");
const expressLoader = require("./express");
const corsLoader = require("./cors");

const loader = async (app) => {
  corsLoader(app);
  await dbConnect();
  await expressLoader(app);
};

module.exports = loader;
