const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller.js");
const personsController = require("./controllers/persons.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const plansController = require("./controllers/plans.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");




app.use(express.json());
// app.use("/persons", persons);  

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/locations/:index', (req, res) => {
  res.json(locationsArray[index]);
});

app.use("/locations", locationsController);



app.get('/persons/:index', (req, res) => {
  res.json(personsArray[index]);
});

app.use("/persons", personsController);


app.get("/machines/:index", (req, res) => {
  res.json(machinesArray[index])

})

app.use("/machines", machinesController)

app.get("/plans/:index", (req, res) => {
  res.json(plansArray[index])

})

app.use("/plans", plansController)


app.get("/special-events/:index", (req, res) => { 
  res.json(specialEventsArray[index])
})

app.use("/special-events", specialEventsController)

module.exports = app;

