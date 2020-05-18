const db = require('../database/connection');
const uuid = require('./../utils/uuid');

module.exports = {
    getAll: async (req, res) => {
        let { page = 1 } = req.query;
        const pageLimit = 5;
        const incidentColumns = ['incident.id', 'incident.title', 'incident.description', 'incident.value'];
        const ongColumns = ['ong.name', 'ong.email', 'ong.whatsapp', 'ong.city', 'ong.uf'];

        page = page <= 0 ? 1 : page;

        const data = await db.select(incidentColumns).from('incident')
            .innerJoin('ong', 'incident.ong_id', 'ong.id').select(ongColumns)
        .limit(pageLimit).offset((page - 1) * pageLimit);
        
        const { count } = await db('incident').count().first();
        
        return res.json({
            data,
            page,
            count
        });
    },

    getById: async (req, res) => {
        const id = req.params.id;
        const incidentColumns = ['incident.id', 'incident.title', 'incident.description', 'incident.value'];
        const ongColumns = ['ong.name', 'ong.email', 'ong.whatsapp', 'ong.city', 'ong.uf'];

        const data = await db.select(incidentColumns).from('incident')
            .innerJoin('ong', 'incident.ong_id', 'ong.id').select(ongColumns)
        .where({ 'incident.id': id });
        
        return res.json(data);
    },

    save: async (req, res) => {
        const id = uuid.generate();
        const ong_id = req.params.id
        const { title, description, value } = req.body;

        const obj = await db('incident').insert({
            id,
            title,
            description,
            value,
            ong_id
        }, '*');

        return res.json(obj);
    },

    delete: async (req, res) => {
        const id = req.params.id;
        const obj = await db('incident').where({ id }).delete('*');

        return res.json(obj);
    }
};