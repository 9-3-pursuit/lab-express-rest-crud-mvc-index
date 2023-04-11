const express = require("express")

const specialEvent = express.Router();
const specialEventArray = require("../models/special-event.model.js");


specialEvent.get("/", (req, res) => {
    res.json(specialEventArray);

})
specialEvent.get("/:index", (req, res) => {
    const { index } = req.params;
    res.json(specialEventArray[index]);
});

module.exports = specialEvent;