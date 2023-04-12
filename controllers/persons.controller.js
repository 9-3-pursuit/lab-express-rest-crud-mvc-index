const express = require("express");
const peopleRouter = express.Router();
const peopleArray = require("../models/person.model");

peopleRouter.get("/", (req, res) => {
  res.send(peopleArray);
});

module.exports = peopleRouter;
