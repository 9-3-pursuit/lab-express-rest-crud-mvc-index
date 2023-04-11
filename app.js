// DEPENDENCIES
const express = require("express");
const locationController = require("./controllers/locations.controller.js")
const peopleController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js")

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//Locations
app.use("/locations", locationController);

//People
app.use("/persons", peopleController);

//Plans
app.use("/plans", plansController);

//Equipment
app.use("/machines", machinesController);

//Special-events
app.use("/special-events", specialEventsController);



//Error Handling
app.get("*", (req, res) => {
    res.status(404).json({"error" : "Sorry, no page found!"})
})
// EXPORT
module.exports = app;