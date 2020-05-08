const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

// Ongs controller
routes.get('/ongs', OngController.getAll);
routes.get('/ongs/:id', OngController.getById);
routes.get('/ongs/:id/incidents', OngController.getIncidents);
routes.post('/ongs', OngController.save);

// Incidents controller
routes.get('/incidents', IncidentController.getAll);
routes.get('/incidents/:id', IncidentController.getById);
routes.post('/incidents', IncidentController.save);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;