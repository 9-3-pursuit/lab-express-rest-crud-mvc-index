const express = require ('express');
const persons = express.Router();
const ctrlPersons = require('../models/person.model.js');

//locations pages
persons.get('/', (req, res) => {
  res.json(ctrlPersons);

});

module.exports = persons;

