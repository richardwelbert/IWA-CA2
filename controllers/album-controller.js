var Album = require('../models/album');

exports.getpage = function(req, res){
    res.render("./views/index", {
        viewTitle: "Albums"
    });
};

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