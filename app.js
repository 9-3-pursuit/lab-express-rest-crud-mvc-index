//DEPENDENCIES
const express = require("express");
const locationsController = require("./controllers/locations.controller.js")
const peopleController = require("./controllers/persons.controller.js")
const plansController = require("./controllers/plans.controller.js")
const specialeventsController = require("./controllers/special-events.controller.js")
const equipmentController = require("./controllers/machines.controller.js")

//CONFIGURATION
const app = express()

//ROUTE
app.get("/" , (req, res) => {
    res.send("Hello, world!")
});

app.use("/locations", locationsController);
app.use("/persons", peopleController);
app.use("/plans", plansController);
app.use("/machines", equipmentController);
app.use("/special-events", specialeventsController);

app.get("*", (req, res) => {
    res.status(404).send("Sorry, no page found!")
})
//EXPORT
module.exports = app;