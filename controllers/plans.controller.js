const express = require('express')
const plansData = express.Router()
const plansArray = require('../models/plan.model')

plansData.get('/', (request, response) => {
    response.send(plansArray)
})

module.exports = plansData