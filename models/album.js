var mongoose = require('mongoose');

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
        enum: ['POP', 'REB', 'HIPHOP', 'EDM']
    }
});

module.exports = mongoose.model('Album', albumSchema);