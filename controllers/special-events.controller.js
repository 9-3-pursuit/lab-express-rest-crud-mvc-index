const express = require ('express');
const special = express.Router();
const ctrlSpecial = require('../models/special-event.model.js');

//locations pages
special.get('/', (req, res) => {
  res.json(ctrlSpecial);

});

module.exports = special;

