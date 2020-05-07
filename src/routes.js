const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Hello Node & Express!'
    })
});

module.exports = routes