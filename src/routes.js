const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const validate = require('./middlewares/validation.middleware')

const { body, param } = require('express-validator');

// Default router
routes.get('/', (req, res) => {
    res.status(200).json({
        statusCode: 200,
        success: true,
        timestamp: new Date().getTime()
    });
});

// Ongs controller
routes.get('/ongs', OngController.getAll);
routes.get('/ongs/:id', validate([
    param('id').isUUID(),
]), OngController.getById);
routes.get('/ongs/:id/incidents', validate([
    param('id').isUUID(),
]), OngController.getIncidents);
routes.post('/ongs/:id/incidents', validate([
    param('id').isUUID(),
    body('title').isLength({ min: 5 }),
    body('description').isLength({ min: 10 }),
    body('value').isFloat({ min: 0.01 })
]), IncidentController.save);
routes.post('/ongs', validate([
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('whatsapp').notEmpty(),
    body('city').notEmpty(),
    body('uf').isLength({ min: 2, max: 2 }),
]), OngController.save);

// Incidents controller
routes.get('/incidents', IncidentController.getAll);
routes.get('/incidents/:id', validate([
    param('id').isUUID()
]), IncidentController.getById);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;