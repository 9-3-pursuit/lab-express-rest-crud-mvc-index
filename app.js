const express = require("express");
const app = express();
const locationsController = require("./controllers/locations.controller.js");
const peopleController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const specialController = require("./controllers/special-events.controller.js");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationsController);
app.use("/persons", peopleController);
app.use("/plans", plansController);
app.use("/machines", machinesController);
app.use("/special-events", specialController);

// app.get("/locations/people", (req, res) => {

//   const result = [];
//   for (let i = 0; i < locations.length; i++) {
//     const peopleInLocation = [];
//     for (let j = 0; j < people.length; j++) {
//       if (people[j].mainLocation === locations[i].zip) {
//         peopleInLocation.push(person);
//       }
//     }
//     result.push({
//       location,
//       people: peopleInLocation,
//     });
//   }
//   res.json(result);
// });

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

module.exports = app;
