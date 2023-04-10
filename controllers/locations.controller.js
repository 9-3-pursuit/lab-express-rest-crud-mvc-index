const express = require("express");
const locations = express.Router();
const locationsArr = require("../models/location.model");

const locationHandler = (req, res) => {
  res.json(locationsArr);
};

locations.get("/", locationHandler);

module.exports = locations;
