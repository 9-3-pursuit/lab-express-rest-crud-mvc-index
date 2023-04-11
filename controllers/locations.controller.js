const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");


locations.get("/", (req, res) => {
  // /locations/
  res.json(locationsArray);
});


module.exports = locations; 
