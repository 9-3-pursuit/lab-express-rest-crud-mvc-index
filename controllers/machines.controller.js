const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model.js");

machines.get("/equipment", (req, res) => {
  res.json(machinesArray);
});

module.exports = machines;