//DEPENDENCIES
const express = require("express")

//CONFIGURATIONS 
const people = express.Router()
const peopleArr = require("../models/person.model.js")

//INDEX - ALL PEOPLE
people.get("/", (req, res) => {
    res.json(peopleArr)
})

module.exports = people;