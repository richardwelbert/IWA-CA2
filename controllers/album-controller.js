var Album = require('../models/album'),
mongoose = require('mongoose'),
assert = require('assert');
require('dotenv/config');

var url = (process.env.DB_CONNECTION);

exports.createAlbum = function(req, res) {
    var newalbum = {
        genre: req.body.genre,
        artist: req.body.artist,
        album: req.body.album,
        year: req.body.year
    };
    mongoose.connect(url, function(err, db){
        assert.equal(null, err);
        db.collection('albums').insertOne(newalbum, function(err, result){
            assert.equal(null, err);
            console.log('Item inserted');
            db.close();
        });
    });
    res.redirect('/');
    /*new Album(req.body);
    newalbum.save(function (err, album) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(album); 
});*/
};

exports.getPage = (function(req, res, next){
    res.sendFile(path.join(__dirname, 'index.html'));
    res.render('index');
});

exports.getAlbums = function(req, res) {
  Album.find({}, function (err, albums) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(albums);
  }); 
};

exports.getAlbum = function(req, res) {
  Album.findOne({_id: req.params.id}, function (err, album) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(album);
  }); 
};

exports.deleteAlbum = function(req, res) {
  Album.findByIdAndRemove(req.params.id, function (err, album) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(album);
  }); 
};

exports.updateAlbum = function(req, res) {
  Album.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, album) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(album);
  }); 
};