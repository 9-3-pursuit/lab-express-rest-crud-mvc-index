const express = require("express")

const person = express.Router();
const personArray = require("../models/person.model.js");


person.get("/", (req, res) => {
    res.json(personArray);

})
person.get("/:index", (req, res) => {
    const { index } = req.params;
    res.json(personArray[index]);
});

module.exports = person;