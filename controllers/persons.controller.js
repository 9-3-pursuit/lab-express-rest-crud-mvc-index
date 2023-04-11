const express = require('express')
const persons = express.Router()
const personsArray = require('../models/person.model')

persons.get('/', (request, response) => {
    response.send(personsArray)
})

module.exports = persons