/*
Code adapted from the structure that can be found on the link below

Title: Mongodb-test
Author: Mikhail Timofeev
Date: 18/04/2020 (last accessed)
Availability: https://github.com/mikhail-cct/mongodb-test 
*/

var logger = require("morgan"), //Module to log requests and errors to the console
cors = require("cors"), //Module to allow communication between different origins
http = require("http"), //This module provides the HTTP server functionalities
express = require("express"), //This module allows this app to respond to HTTP Requests, defines the routing and renders back the required content
mongoose = require('mongoose'), //Module to connect to mongodb database
path = require('path'), //The path module provides utilities for working with file and directory paths
bodyParser = require("body-parser"), //Module to read the HTTP POST data
sweetAlert = require('sweetalert'); //This module is for the pop up alerts
require('dotenv/config'); //module to hide the link that connects to the database


var app = express(); //The set our routing to be handled by Express
var port = process.env.PORT || 3000;
const albumCtrl = require('./controllers/album-controller');
var server = http.createServer(app); //This is where our server gets created

app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'html');
app.use(express.static(path.resolve(__dirname, 'views'))); //We define the views folder as the one where all static content will be served

//We define the root of our website and render index.html located inside the views folder
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
    res.render('index');

})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(bodyParser.json());
//importing routes
app.use(require('./controllers/routes'));

//start listening to the server
app.listen(port, function(err){
    console.log("Listening on port:" + port);
});

//connection to the database
mongoose.connect(process.env.DB_CONNECTION);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});