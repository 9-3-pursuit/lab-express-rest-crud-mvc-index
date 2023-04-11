const express = require("express");
const specialEvents = express.Router();
const specialEventsArray = require("../models/special-event.model.js")


specialEvents.get("/",(req,res)=>{
    res.json(specialEventsArray)
} )

specialEvents.get("/:index",(req,res)=>{
    const { index } = req.params 
    res.json(specialEventsArray[index])
} )



module.exports = specialEvents;