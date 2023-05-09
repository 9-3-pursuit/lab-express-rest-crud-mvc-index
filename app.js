const express = require("express");
const locations = require("./controllers/locations.controller");
const machines = require("./controllers/machines.controller");
const plans = require("./controllers/plans.controller");
const persons = require("./controllers/persons.controller");
const events = require("./controllers/special-events.controller");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locations);
app.use("/machines", machines);
app.use("/plans", plans);
app.use("/persons", persons);
app.use("/special-events", events);

app.get("/*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;
