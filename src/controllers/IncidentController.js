const uuidJs = require('uuid');
const db = require('../database/connection');

module.exports = {
    getAll: async (req, res) => {
        const { page = 1 } = req.query;
        const pageLimit = 5
        
        const data = await db.select('*').from('incident').limit(pageLimit).offset((page - 1) * pageLimit);
        const { count } = await db('incident').count().first()
        
        return res.json({
            data,
            page,
            count
        });
    },

    getById: async (req, res) => {
        const id = req.params.id;
        const data = await db.select('*').from('incident').where({ id }).first();
        
        return res.json(data);
    },

    save: async (req, res) => {
        const id = uuidJs.v4();
        const { title, description, value, ong } = req.body;

        const obj = await db('incident').insert({
            id,
            title,
            description,
            value,
            ong_id: ong.id
        }, '*');

        return res.json(obj);
    },

    delete: async (req, res) => {
        const id = req.params.id;
        const obj = await db('incident').where({ id }).delete('*');

        return res.json(obj);
    }
};