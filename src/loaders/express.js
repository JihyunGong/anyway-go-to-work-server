const express = require("express");

module.exports = async (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};
