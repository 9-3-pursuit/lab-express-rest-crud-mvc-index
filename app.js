// DEPENDENCIES
const express = require("express");
const locationsController = require("./controllers/locations.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const peopleController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});


// app.use mounts a specified middleware function/s at a specified path
app.use("/locations", locationsController); 

app.use("/machines", machinesController);

app.use("/persons", peopleController);

app.use("/plans", plansController);

app.use("/special-events", specialEventsController);


// BONUS ROUTE
app.get("/locations/people", (req, res) => {
    const result = [];
        for (let i = 0; i < locations.length; i++) {
            const peopleAtLocation = [];
        for (let j = 0; j < people.length; j++) {
            if (people[j].mainLocation === locations[i].zip) {
                peopleAtLocation.push(person);
            }
        }
        result.push({
            location,
            people: peopleAtLocation,
        });
        }
        res.json(result);
});

app.get("*", (req, res) => {
  res.status(404).json({ "error" : "Sorry, no page found!"})
})

// EXPORT
module.exports = app;