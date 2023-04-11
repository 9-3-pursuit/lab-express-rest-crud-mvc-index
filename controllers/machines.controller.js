const express = require('express')
const machinesData = express.Router()
const machinesArray = require('../models/machine.model')

machinesData.get('/', (request, response) => {
    response.send(machinesArray)
})

module.exports = machinesData