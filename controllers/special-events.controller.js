//DEPENDENCIES
const express = require("express")

//CONFIGURATIONS 
const specialEvents = express.Router()
const specialEventsArr = require("../models/special-event.model.js")

//INDEX - ALL SPECIAL EVENTS
specialEvents.get("/", (req, res) => {
    res.json(specialEventsArr)
})

module.exports = specialEvents;