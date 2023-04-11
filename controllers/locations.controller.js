//DEPENDENCIES
const express = require("express")

//CONFIGURATIONS 
const locations = express.Router()
const locationsArr = require("../models/location.model.js")

//INDEX - ALL LOCATIONS
locations.get("/", (req, res) => {
    res.json(locationsArr)
})

module.exports = locations;