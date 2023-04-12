const express = require('express');

const persons = express.Router();

const personsArray = require('../models/person.model.js'); 


persons.get("/", (req, res) => {
  
  res.json(personsArray);
});

persons.get("/:index", (req, res) => {
  const { index } = req.params;
  res.json(persons[index]);
});

module.exports = persons;