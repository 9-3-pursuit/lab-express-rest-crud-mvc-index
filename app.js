const express = require('express');
const locationsController = require('./controllers/locations.controller');
const machinesController = require('./controllers/machines.controller');
const personsController = require('./controllers/persons.controller.js');
const plansController = require('./controllers/plans.controller');
const specialEventsController = require('./controllers/special-events.controller');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use('/locations', locationsController);

app.use('/equipment', machinesController);

app.use('/persons', personsController);

app.use('/plans', plansController);

app.use('/special-events', specialEventsController);

app.get('*', (req, res) => {
  res.status(404);
  res.json({ error: 'Page not found' });
});

module.exports = app;
