const express = require("express");
const specialEventsRouter = express.Router();
const specialEventsArray = require("../models/special-event.model");

specialEventsRouter.get("/", (req, res) => {
  res.send(specialEventsArray);
});

module.exports = specialEventsRouter;
