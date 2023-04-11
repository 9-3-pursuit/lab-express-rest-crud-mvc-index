const express = require("express")

const plan = express.Router();
const planArray = require("../models/plan.model.js");


plan.get("/", (req, res) => {
    res.json(planArray);

})
plan.get("/:index", (req, res) => {
    const { index } = req.params;
    res.json(planArray[index]);
});

module.exports = plan;