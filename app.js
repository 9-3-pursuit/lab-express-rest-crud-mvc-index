// DEPENDENCIES
const express = require("express");
const locationsController = require("./controllers/locations.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const machinesController = require("./controllers/machines.controller");
const specialEventsController = require("./controllers/special-events.controller");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.use("/locations", locationsController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/machines", machinesController);
app.use("/special-events", specialEventsController);

app.get("*", (req, res) => {
    res.status(404).json({error: "Page Not Found"});
});
// EXPORT
module.exports = app;