const express = require ('express');
const machines = express.Router();
const ctrlMachines = require('../models/machine.model.js');

//locations pages
machines.get('/', (req, res) => {
  res.json(ctrlMachines);

});

module.exports = machines;

