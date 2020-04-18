var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
mongoose = require('mongoose'),
path = require('path'), //The path module provides utilities for working with file and directory paths
bodyParser = require("body-parser");
require('dotenv/config');


var app = express();
var port = process.env.PORT || 3000;
const albumCtrl = require('./controllers/album-controller');
var server = http.createServer(app); //This is where our server gets created

app.use(express.static(path.resolve(__dirname, 'views'))); //We define the views folder as the one where all static content will be served

//We define the root of our website and render index.html located inside the views folder
app.get('/', function(req, res){

    res.render('index');

})

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