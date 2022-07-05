require("dotenv").config();
const mongoose = require("mongoose");

module.exports = async () => {
  const connect = () => {
    mongoose.connect(process.env.MONGO_URL, (err) => {
      if (err) console.log(err);
    });
  };

  const db = mongoose.connection;

  db.on("error", () => {
    console.log("DB connection error!");
  });
  db.once("open", () => {
    console.log("DB connected!");
  });

  connect();
};
