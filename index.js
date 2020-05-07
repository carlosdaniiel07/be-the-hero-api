const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Hello Node & Express!'
    })
});

app.listen(3000, () => {
    console.log('[INFO] Running on port 3000!');
})