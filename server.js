var logger = require("morgan"),
cors = require("cors"),
http = require("http"), //This module provides the HTTP server functionalities
express = require("express"), //This module allows this app to respond to HTTP Requests, defines the routing and renders back the required content
exphbs = require('express-handlebars'),
mongoose = require('mongoose'),
path = require('path'), //The path module provides utilities for working with file and directory paths
bodyParser = require("body-parser"),
collection = "album";
require('dotenv/config');


var app = express();
var port = process.env.PORT || 3000;
const albumCtrl = require('./controllers/album-controller');
var server = http.createServer(app); //This is where our server gets created

app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'hbs');
app.use(express.static(path.resolve(__dirname, 'views'))); //We define the views folder as the one where all static content will be served

//We define the root of our website and render index.html located inside the views folder
//app.get('/', function(req, res){
//    res.sendFile(path.join(__dirname, 'index.html'));
    //res.render('index');

//})


//app.use(logger('dev'));
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