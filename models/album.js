/*
Code adapted from the structure that can be found on the link below

Title: Mongodb-test
Author: Mikhail Timofeev
Date: 18/04/2020 (last accessed)
Availability: https://github.com/mikhail-cct/mongodb-test */

var mongoose = require('mongoose');

//Schema of the album
var albumSchema = new mongoose.Schema ({

    artist: {
        type: String,
        required: 'This field is required.'
    },
    album: {
        type: String,
        required: 'This field is required.'
    },
    year: {
        type: Number,
        required: 'This field is required.'
    },
    genre: {
        type: String,
    }
});

module.exports = mongoose.model('Album', albumSchema);