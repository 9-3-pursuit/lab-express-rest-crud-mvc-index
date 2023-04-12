const express = require("express");
const specialEvents = express.Router();

const specialEventsArray = require("../models/special-event.model.js");

// GET all special events

specialEvents.get("/", (req, res) => {
  res.json(specialEventsArray);
});

// GET one special events

specialEvents.get("/:index", (req, res) => {
  const { index } = req.params;
  res.json(specialEvents[index]);
});

module.exports = specialEvents;
