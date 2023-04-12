const express = require("express");
const locationsRouter = express.Router();
const locationsArray = require("../models/location.model");

locationsRouter.get("/", (req, res) => {
  res.send(locationsArray);
});

module.exports = locationsRouter;
