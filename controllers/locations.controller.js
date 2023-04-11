const express = require("express");
const locations = express.Router();
// express.Router() is: A tool that helps us create different Routes in our web application
const locationsArray = require("../models/location.model.js");

// index - all locations
locations.get("/", (req, res) => { // middleware are like callbacks... but... middleware are the parameters inside the parenthesis ie: req, res, & next!
    res.json(locationsArray)
});

// /locations/:index
locations.get("/:index", (req, res) => {
    const { index } = req.params;
    res.json(locationsArray[index]);
}); 

module.exports = locations;