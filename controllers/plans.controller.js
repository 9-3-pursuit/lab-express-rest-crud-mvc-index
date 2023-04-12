const express = require("express")
const plans = express.Router()

const plansArray = require("../models/plan.model.js")

// GET all plans

plans.get("/",(req, res) => {
    res.json(plansArray)
})

// GET one plan

plans.get("/:index", (req, res) => {
    const { index } = req.params;
    res.json(plans[index])
})

module.exports = plans