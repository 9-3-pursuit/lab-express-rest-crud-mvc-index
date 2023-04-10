const express = require("express");
const machines = express.Router();
const machinesArr = require("../models/machine.model");

const machineHandler = (req, res) => {
  res.json(machinesArr);
};

machines.get("/", machineHandler);

module.exports = machines;
