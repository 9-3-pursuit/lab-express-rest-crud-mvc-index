// Import
const express = require("express");
const specialEvents = express.Router();
const specialEventsArray = require("../models/special-events.model.js");

// Routes
specialEvents.get("/", (req, res) => {
  res.json(specialEventsArray);
});

specialEvents.get("/:index", (req, res) => {
  const { index } = req.params;
  res.json(specialEventsArray[index]);
});

// Exports
module.exports = specialEvents;