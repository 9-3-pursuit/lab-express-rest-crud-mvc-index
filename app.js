const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, world!");
  });

const locationsController = require("./controllers/locations.controller.js");
app.use("/locations", locationsController);

const peopleController = require("./controllers/persons.controller.js");
app.use("/persons", peopleController);

const plansController = require("./controllers/plans.controller.js");
app.use("/plans", plansController);

const equipmentController = require("./controllers/machines.controller.js");
app.use("/machines", equipmentController);

const specialEventsController = require("./controllers/special-events.controller.js");
app.use("/special-events", specialEventsController);

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" })
  });

  module.exports = app
