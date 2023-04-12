const express = require("express");
const equiptmentRouter = express.Router();
const equiptmentArray = require("../models/machine.model");

equiptmentRouter.get("/", (req, res) => {
  res.send(equiptmentArray);
});

module.exports = equiptmentRouter;
