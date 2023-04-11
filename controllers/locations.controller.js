const express = require ('express');
const locations = express.Router();
const ctrlLocations = require('../models/location.model.js');

//locations pages
locations.get('/', (req, res) => {
  res.json(ctrlLocations);

});

module.exports = locations;

