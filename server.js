var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
mongoose = require('mongoose'),
bodyParser = require("body-parser");
require('dotenv/config');


var app = express();
var port = process.env.PORT || 3000;
const albumCtrl = require('./controllers/album-controller');

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