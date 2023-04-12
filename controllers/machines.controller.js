const express = require('express');
const machines = express.Router()  

const machinesArray = require('../models/machine.model.js');

machines.get("/", (req, res) =>{
 
    res.json(machinesArray)
})



machines.get("/machines/:index", (req, res) => {
    const { index } = req.params;
    res.json(machines[index]);
    });

    module.exports = machines;
