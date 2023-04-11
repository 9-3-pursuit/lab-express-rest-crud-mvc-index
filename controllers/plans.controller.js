const express = require ('express');
const plans = express.Router();
const ctrlPlans = require('../models/plan.model.js');

//locations pages
plans.get('/', (req, res) => {
  res.json(ctrlPlans);

});

module.exports = plans;

