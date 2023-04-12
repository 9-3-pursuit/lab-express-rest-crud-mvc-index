const express = require("express");

const locations = express.Router();

const locationsArray = require("../models/location.model.js");
console.log(locationsArray);

// const bookmarksArray = require("../models/bookmarks.js");

locations.get("/", (req, res) => {
    console.log("GET /locations");
  res.json(locationsArray);
});

locations.get("/:index", (req, res) => {
  const { index } = req.params;
  res.json(locations[index]);
});

module.exports = locations

