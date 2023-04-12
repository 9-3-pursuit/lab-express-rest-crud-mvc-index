const express = require("express");
const app = express();
const locationRouter = require("./controllers/locations.controller");
const equiptmentRouter = require("./controllers/machines.controller");
const peopleRouter = require("./controllers/persons.controller");
const plansRouter = require("./controllers/plans.controller");
const specialEventsRouter = require("./controllers/special-events.controller");
app.use("/locations", locationRouter);
app.use("/machines", equiptmentRouter);
app.use("/persons", peopleRouter);
app.use("/plans", plansRouter);
app.use("/special-events", specialEventsRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.get("*", (req, res) => {
  res.status(404).send({ error: "Resource not found" });
});

module.exports = app;
