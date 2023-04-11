const express = require("express");
const app = express();
// const people = require("./models/plan.model.js");
// const locations = require("./models/location.model.js")

const controllers = [
    { path: "/locations", controller: require("./controllers/locations.controller.js") },
    { path: "/persons", controller: require("./controllers/persons.controller.js") },
    { path: "/plans", controller: require("./controllers/plans.controller.js") },
    { path: "/machines", controller: require("./controllers/machines.controller.js") },
    { path: "/special-events", controller: require("./controllers/special-events.controller.js")},
  ];
  
  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });
  
  // Bonus 
  app.get("/locations/people", (req, res) => {
    const people = require("./models/person.model.js");
    const locations = require("./models/location.model.js");
    const result = locations.map(location => ({
        ...location,
        people: people.filter(person => location.zip === person.mainLocation)
      }));
      
    res.json(result);
  });

  controllers.forEach(({ path, controller }) => {
    app.use(path, controller);
  });
  
  

  app.get("*", (req, res) => {
    res.status(404).json({ "error": "Page Not Found" });
  });
  
  module.exports = app;