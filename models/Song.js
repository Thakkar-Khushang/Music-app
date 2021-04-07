const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name: {
        type:String,
        required:[true,'Name is required'],
    },
    artist: {
        type:String,
        required:[true,'Artist name is required']
    },
    img_url:{
        type:String,
        required:[true,'Image URL is required'],
    },
    song_url:{
        type:String,
        required:[true,'Song URL is required'],
    }
});

const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

SongSchema.path('img_url').validate((val) => {  
    return urlRegex.test(val);
}, 'Invalid URL.');

SongSchema.path('song_url').validate((val) => {
    return urlRegex.test(val);
}, 'Invalid URL.');

const Song = mongoose.model('Song', SongSchema);
module.exports = Song;
