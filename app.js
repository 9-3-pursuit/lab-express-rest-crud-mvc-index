//dependencies
const express = require('express');
const locations= require("./controllers/locations.controller.js")
const machinesController = require("./controllers/machines.controller.js")
const personsController = require("./controllers/persons.controller.js")
const plansController = require("./controllers/plans.controller.js")
 const specialeventController = require("./controllers/special-events.controller.js")

//configurations
const app = express();

//routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
} );

app.use("/locations", locations);

app.use("/machines", machinesController)

app.use("/persons", personsController)

app.use("/plans", plansController)

app.use("/special-events", specialeventController)


module.exports = app;
