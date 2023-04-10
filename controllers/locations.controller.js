//Imports
const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");

// Routes
locations.get("/", (req, res) => {
  res.json(locationsArray);
});

locations.get("/:index", (req, res) => {
  const { index } = req.params;
  res.json(locationsArray[index]);
});

// Export
module.exports = locations;
