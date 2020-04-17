var express = require('express'),
router = express.Router(),
albumCtrl = require('./controllers/album-controller');

module.exports.UPLOAD_PATH = 'uploads';

var multer = require('multer'),
upload = multer({ dest: module.exports.UPLOAD_PATH }),

