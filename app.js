const express = require("express");
const path = require("path");

const app = express();

const configureRouteController = (route, controllerPath) => {
  const controller = require(path.join(__dirname, controllerPath));
  app.use(route, controller);
};

configureRouteController("/", "./controllers/root.controller.js");
configureRouteController("/locations", "./controllers/locations.controller.js");
configureRouteController("/machines", "./controllers/machines.controller.js");
configureRouteController("/persons", "./controllers/persons.controller.js");
configureRouteController("/plans", "./controllers/plans.controller.js");
configureRouteController("/special-events", "./controllers/special-events.controller.js");

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;
