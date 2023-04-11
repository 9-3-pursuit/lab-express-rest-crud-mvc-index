//DEPENDENCIES
const express = require("express")

//CONFIGURATIONS 
const machines = express.Router()
const machinesArr = require("../models/machine.model.js")

//INDEX - ALL machines
machines.get("/", (req, res) => {
    res.json(machinesArr)
})

module.exports = machines;