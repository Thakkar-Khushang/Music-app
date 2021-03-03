const express = require('express');
const router = express.Router();
const Song = require('../models/song');

//get all the songs from db
router.get('/songs', async function(req, res, next){
    const songs = await Song.find({})
    res.send(songs)
});

router.post('/songs', function(req, res, next){
    Song.create({
        "name":req.body.name.toLowerCase(),
        "artist":req.body.artist,
        "img_url":req.body.img_url,
        "song_url":req.body.song_url
    }).then(function(song){
        res.send(song);
    }).catch(next);
});

//delete a song from db
router.delete('/songs/:id', async function(req, res, next){
    const song = await Song.findByIdAndRemove({_id:req.params.id}).catch(next);
    res.send(song)
});

router.get('/songs/search', async function(req,res){
    s = req.query.name.toLowerCase();
    const song = await Song.find({ "name" : { $regex: s, $options: 'i' } })
    res.send(song)
});

module.exports = router;