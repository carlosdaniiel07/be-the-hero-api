const express = require('express');
const routes = express.Router();
const uuidJs = require('uuid')
const db = require('./database/connection');

routes.get('/ongs', async (req, res) => {
    const data = await db.select('*').from('ong');
    return res.json(data);
});

routes.get('/ongs/:id', async (req, res) => {
    const id = req.params.id;
    const data = await db.select('*').from('ong').where({ id });

    return res.json(data);
});

routes.post('/ongs', async (req, res) => {
    const id = uuidJs.v4()
    const { name, email, whatsapp, city, uf } = req.body;

    const obj = await db('ong').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    }, '*');

    res.json(obj);
});

module.exports = routes