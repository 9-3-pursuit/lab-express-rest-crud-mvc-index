//dependencies
const express = require('express');
//configurations
const app = express();

const locationController = require('./controllers/locations.controller.js');

const personController = require('./controllers/persons.controller.js');

const machinesController = require('./controllers/machines.controller.js');

const plansController = require('./controllers/plans.controller.js');

const specialController = require('./controllers/special-events.controller.js');

app.use('/locations', locationController);
app.use('/persons', personController);
app.use('/machines', machinesController);
app.use('/plans', plansController);
app.use('/special-events', specialController);


app.get('/', (req, res) => {
  res.send('Hello, world!');
} );

app.get('*', (req, res) => {
  res.status(404).send('Sorry, no page found!');
  
} );

module.exports = app