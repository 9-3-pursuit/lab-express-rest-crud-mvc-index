const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/locationModel.js");

locations.get("/", (req, res) => {
  res.json(locationArray);
});

locations.get("/:index", (req, res) => {
  const { index } = req.params;
  res.json(locationsArray[index]);
});

module.exports = locations;
