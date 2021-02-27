const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create song Schema and Model
const SongSchema = new Schema({
    name: {
        type:String,
        required:[true,'Name field is required']
    },
    img_url:{
        type:String
    },
    available:{
        type: Boolean,
        default:false
    }
});

const Song = mongoose.model('Song', SongSchema);
module.exports = Song;