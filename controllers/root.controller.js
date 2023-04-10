const express = require("express");
const root = express.Router();

const rootHandler = (req, res) => {
  res.send("Hello, world!");
};

root.get("/", rootHandler);

module.exports = root;
