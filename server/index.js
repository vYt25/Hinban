const express = require('express');
const port = 5000;
const router = require('./routes/controller.js');
const app = express();
app.use('/', router);
app.listen(port, function () {
    console.log('listening to port' + port);
})