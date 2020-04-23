var Album = require('../models/album');

//Function to create an album in the DB
exports.createAlbum = function(req, res){
    var newalbum = new Album(req.body);
    newalbum.save(function (err, album) { 
        if (err) { 
            res.status (400).json(err);
        }
        res.redirect('/');
    });
};

//Function to get all albums from the DB
exports.getAlbums = function(req, res) {
  Album.find({}, function (err, album) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(album);
  }); 
};

//Function to find a single album by its ID
exports.getAlbum = function(req, res) {
  Album.findOne({_id: req.params.id}, function (err, albums) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(albums);
  }); 
};

//Function to delete an album from the DB
exports.deleteAlbum = function(req, res) {
  Album.findByIdAndRemove(req.params.id, function (err, album) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(album);
  }); 
};

//Function to update an album from the DB
exports.updateAlbum = function(req, res) {
  Album.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, album) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(album);
  }); 
};