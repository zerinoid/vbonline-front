const express = require('express')
const bodyParser = require('body-parser');

// App
const app = express()

// Routes import
const apiRoutes = require('./routes/api');

// BodyParser
app.use(bodyParser.json());

// Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Routes declaration
app.use('/api', apiRoutes);

// Run server
app.listen(4000)