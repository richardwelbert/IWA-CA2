/*
Code adapted from the structure that can be found on the link below

Title: Mongodb-test
Author: Mikhail Timofeev
Date: 18/04/2020 (last accessed)
Availability: https://github.com/mikhail-cct/mongodb-test */

var express = require('express'),
router = express.Router();
const albumCtrl = require('./album-controller');

//routes to album-controller
router.post('/post-newalbum', albumCtrl.createAlbum);
router.get('/albums', albumCtrl.getAlbums);
router.get('/albums/:id', albumCtrl.getAlbum);
router.delete('/albums/:id', albumCtrl.deleteAlbum);
router.put('/albums/:id', albumCtrl.updateAlbum);

module.exports = router;