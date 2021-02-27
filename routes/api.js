const express = require('express');
const router = express.Router();
const Song = require('../models/song');

//get all the songs from db
router.get('/songs', function(req, res, next){
    Song.find({}).then(function(songs){
        res.send(songs);
    });
});

//get one song by object id
router.get('/songs/search', function(req, res, next){
    Song.find({name:req.query.name}) .then(function(song){
        res.send(song);
    });
});

//add a new song to db
router.post('/songs', function(req, res, next){
    Song.create(req.body).then(function(song){
        res.send(song);
    }).catch(next);
});

//delete a song from db
router.delete('/songs/:id', function(req, res, next){
    Song.findByIdAndRemove({_id:req.params.id}).then(function(song){
        res.send(song);
    });
});

module.exports = router;