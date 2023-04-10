// DEPENDENCIES
const express = require("express");
const locations = require("./controllers/locationsController")
const machines = require("./controllers/machinesController")
const persons = require("./controllers/personsController")
const plans = require("./controllers/plansController")
const specialEvents = require("./controllers/special-eventsController")

// CONFIGURATION
const app = express();



// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world! 👋🏾");
});

//app.use()-Middlewear 
app.use("/locations", locations)
app.use("/machines", machines)
app.use("/persons", persons)
app.use("/plans", plans)
app.use("/special-events", specialEvents)

// EXPORT
module.exports = app;