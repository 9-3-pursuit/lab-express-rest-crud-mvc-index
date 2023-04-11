const express = require("express");
const app = express();
const locationsController = require("./controllers/locations.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const personsController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");
app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);


app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.get("/locations/people" , (req, res) => {
    
})

app.get("*", (req, res) => {
    res.status(404).send("error")
})

module.exports = app;