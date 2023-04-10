const express = require("express");
const special_events = express.Router();
const special_eventsArr = require("../models/special-event.model");

const special_eventHandler = (req, res) => {
  res.json(special_eventsArr);
};

special_events.get("/", special_eventHandler);

module.exports = special_events;
