const express = require("express")

const machine = express.Router();
const machineArray = require("../models/machine.model.js");


machine.get("/", (req, res) => {
    res.json(machineArray);

})
machine.get("/:index", (req, res) => {
    const { index } = req.params;
    res.json(machineArray[index]);
});

module.exports = machine;