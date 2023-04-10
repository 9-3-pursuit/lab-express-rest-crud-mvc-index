const express = require("express");
const persons = express.Router();
const personsArr = require("../models/person.model");

const personHandler = (req, res) => {
  res.json(personsArr);
};

persons.get("/", personHandler);

module.exports = persons;
