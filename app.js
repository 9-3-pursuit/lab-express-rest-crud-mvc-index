const express = require('express')
const app = express()
const locationsController = require('./controllers/locations.controller')
const machinesController = require('./controllers/machines.controller.js')
const personsController = require('./controllers/persons.controller.js')
const plansController = require('./controllers/plans.controller.js')
const specialEventsController = require('./controllers/special-events.controller.js')

app.get('/', (request, response) => {
    response.send('Hello, world!')
})

app.use('/locations', locationsController)
app.use('/machines', machinesController)
app.use('/persons', personsController)
app.use('/plans', plansController)
app.use('/special-Events', specialEventsController)


app.get('*', (request, response) => {
    response.status(404)
    response.send('Page cannot be found')
})






module.exports = app