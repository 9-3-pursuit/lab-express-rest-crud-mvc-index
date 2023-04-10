// Imports
const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model.js");

// Routes
persons.get("/", (req, res) => {
  res.json(personsArray);
});

persons.get("/:index", (req, res) => {
  const { index } = req.params;
  res.json(personsArray[index]);
});

// Exports
module.exports = persons;