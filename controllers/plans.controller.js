const express = require("express");
const plansRouter = express.Router();
const plansArray = require("../models/plan.model");

plansRouter.get("/", (req, res) => {
  res.send(plansArray);
});

module.exports = plansRouter;
