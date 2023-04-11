//DEPENDENCIES
const express = require("express")

//CONFIGURATIONS 
const plans = express.Router()
const plansArr = require("../models/plan.model.js")

//INDEX - ALL PLANS
plans.get("/", (req, res) => {
    res.json(plansArr)
})

module.exports = plans;