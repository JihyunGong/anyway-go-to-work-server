const cors = require("cors");

const corsOption = {
  credentials: true,
  origin: "*",
};

module.exports = (app) => {
  app.use(cors(corsOption));
};
