// DEPENDENCIES
const express = require("express");
const locationsController = require("./controllers/locations.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const personsController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// app use mounts a specified middleware function/s at a specified path
app.use("/locations", locationsController); 

app.use("/machines", machinesController);

app.use("/persons", personsController);

app.use("/plans", plansController);

app.use("/special-events", specialEventsController);

app.get("*", (req, res) => {
  //res.json({"error" : "Page Not Found"}) // Error message
  res.status(404).json({ "error" : "Page Not Found"})
})

// EXPORT
module.exports = app;