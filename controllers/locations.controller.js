

const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");


locations.get("/", (req, res) => {
  // /locations/
  res.json(locationsArray);
});

locations.get("/:id", (req, res) => {
    const { id } = req.params
    res.json(`the id is ${id}`);
  });
  




module.exports = locations;
