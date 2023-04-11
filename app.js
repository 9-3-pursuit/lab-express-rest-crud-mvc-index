const express = require('express');
const locationscontroller= require("./controllers/locations.controller.js")
const machinescontroller = require("./controllers/machines.controller.js")
const personscontroller = require("./controllers/persons.controller.js")
const planscontroller = require("./controllers/plans.controller.js") 
const specialEventsController = require("./controllers/special-events.controller.js")
//configurations
const app = express();

//routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
} );

app.use("/locations", locationscontroller);

app.use("/machines", machinescontroller); 

app.use("/persons", personscontroller); 

app.use("/plans", planscontroller); 

app.use("/special-events", specialEventsController);

module.exports = app;