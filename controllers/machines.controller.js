const express = require("express");
const equipment = express.Router();
const machinesArray = require("../models/machine.model.js");

equipment.get("/", (req, res) => {
    res.json(machinesArray);
});

equipment.get("/:index", (req, res) => {
    const { index } = req.params;
    res.json(machinesArray[index]);
});

module.exports = equipment;
