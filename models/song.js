const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create song Schema and Model
const SongSchema = new Schema({
    name: {
        type:String,
        required:[true,'Name field is required']
    },
    artist: {
        type:String,
        required:[true,'Artist name field is required']
    },
    img_url:{
        type:String,
        required:[true,'Artist name field is required']
    },
    song_url:{
        type:String,
        required:[true,'Artist name field is required']
    }
});

const Song = mongoose.model('Song', SongSchema);
module.exports = Song;