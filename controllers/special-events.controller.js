const express = require("express");
const events = express.Router();
const eventArray = require("../models/special-event.model.js");

events.get("/", (req, res) => {
  res.json(eventArray);
});

module.exports = events;