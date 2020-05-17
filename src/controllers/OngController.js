const uuidJs = require('uuid');
const db = require('../database/connection');

module.exports = {
    getAll: async (req, res) => {
        const data = await db.select('*').from('ong');
        return res.json(data);
    },

    getIncidents: async (req, res) => {
        const id = req.params.id;
        const data = await db.select('*').from('incident').where( { ong_id: id });

        return res.json(data)
    },

    getById: async (req, res) => {
        const id = req.params.id;
        const data = await db.select('*').from('ong').where({ id }).first();

        return res.json(data);
    },

    save: async (req, res) => {        
        const id = uuidJs.v4()
        const { name, email, whatsapp, city, uf } = req.body;

        const obj = await db('ong').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        }, '*');

        res.json(obj);
    }
};