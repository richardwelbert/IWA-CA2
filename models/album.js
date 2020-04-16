var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema ({
    artist: {
        type: String
    },
    album: {
        type: String
    },
    year: {
        type: Number
    },
    genre: {
        type: String,
        enum: ['POP', 'REB', 'HIPHOP', 'EDM']
    }
});

module.exports = mongoose.model('Album', albumSchema);