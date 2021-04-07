const express = require('express');
const Song = require('../models/Song');
const router = express.Router();

router.get('/songs', async (req, res, next) => {
    const songs = await Song.find({})
    console.log(req.query)
    res.send(songs)
    
});

router.post('/songs', async(req, res, next) => {
    song = await Song.create({
        "name":req.body.name.toLowerCase().trim(),
        "artist":req.body.artist.trim(),
        "img_url":req.body.img_url,
        "song_url":req.body.song_url
    })
    res.send(song)
});

router.delete('/songs/:id', async(req, res, next) => {
    const song = await Song.findByIdAndRemove({_id:req.params.id}).catch(next);
    res.send(song)
});

router.get('/songs/:id', async(req, res, next) => {
    const song = await Song.findById({_id:req.params.id}).catch(next);
    res.send(song)
});

router.get('/search', async(req,res) => {
    s = req.query.q.toLowerCase().trim();
    if(s==" ".trim()){
        const songs = await Song.find({})
        res.send(songs)
    }else{
    const song = await Song.find({ "name" : { $regex: s, $options: 'i' } })
    res.send(song)
    }
});

module.exports = router;