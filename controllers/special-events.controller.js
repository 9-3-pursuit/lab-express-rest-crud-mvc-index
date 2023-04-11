const express = require('express')
const specialEventsData = express.Router()
const specialEventsArray = require('../models/special-event.model')

specialEventsData.get('/', (request, response) => {
    response.send(specialEventsArray)
})

module.exports = specialEventsData