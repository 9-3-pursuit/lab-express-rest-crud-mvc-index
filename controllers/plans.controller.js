// Imports
const express = require("express");
const plans = express.Router();
const plansArray = require("../models/plan.model.js");

// Routes
plans.get("/", (req, res) => {
  res.json(plansArray);
});

plans.get("/:index", (req, res) => {
  const { index } = req.params;
  res.json(plansArray[index]);
});

//Export
module.exports = plans;