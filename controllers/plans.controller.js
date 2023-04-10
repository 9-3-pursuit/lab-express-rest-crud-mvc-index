const express = require("express");
const plans = express.Router();
const plansArr = require("../models/plan.model");

const planHandler = (req, res) => {
  res.json(plansArr);
};

plans.get("/", planHandler);

module.exports = plans;
