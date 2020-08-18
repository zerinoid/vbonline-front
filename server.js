const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path')

// .env file
require('dotenv').config({path: __dirname + '/.env'})

// Port used by node.js
const port = process.env.PORT || 4000;

// App
const app = express()

// Routes import
const apiRoutes = require('./routes/api');

// bodyParser
app.use(bodyParser.json());

// Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Session
app.use(session({
    secret: "vb"
}));

// Routes declaration
app.use('/api', apiRoutes);

// Run server
if (process.env.NODE_ENV === 'prod') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
        
    // Handle React routing, return all requests to React app
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
  
app.listen(port, () => console.log(`Listening on port ${port}`));