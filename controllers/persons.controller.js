const express = require("express");
const people = express.Router();
const peopleArray = require("../models/person.model.js");

people.get("/", (req, res) => {
  res.json(peopleArray);
});

module.exports = people;