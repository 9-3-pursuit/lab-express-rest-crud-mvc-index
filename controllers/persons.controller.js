const express = require("express");
const people = express.Router();
const peopleArray = require("../models/person.model.js");

people.get("/", (req, res) => {
    res.json(peopleArray);
});

people.get("/:index", (req, res) => {
    const { index } = req.params;
    res.json(peopleArray[index]);
});

module.exports = people;