var Album = require('../models/album');

exports.createAlbum = function(req, res) { 
    var newalbum = new Album(req.body);
    newalbum.save(function (err, album) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(album); 
});
};

exports.getAlbums = function(req, res) {
  Album.find({}, function (err, album) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(album);
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