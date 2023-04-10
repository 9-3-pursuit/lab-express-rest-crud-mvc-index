const express = require("express");
const machines = express.Router();
const machineArray = require("../models/machine.model.js");

machines.get("/", (req, res) => {
  res.json(machineArray);
});

module.exports = machines;