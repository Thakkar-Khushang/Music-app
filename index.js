require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to MongoDB
<<<<<<< HEAD
mongoose.connect('mongodb+srv://starkritter:WO22bEGpsWzLN2dW@cluster0.jzmkj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
=======
mongoose.connect('mongodb+srv://starkritter:WO22bEGpsWzLN2dW@cluster0.jzmkj.mongodb.net/MusicDB?retryWrites=true&w=majority', {
>>>>>>> 46158530e7e6aabf9bb18e5cb536cfb005e7b3d6
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify : false
}).then(()=>{
    console.log('Connected to Database')
})
.catch((err)=>{
    console.error('Error occured connecting to Database. \n${err}');
})
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
    //console.log(err)
    res.status(422).send({error:err._message});
});

//listening to requests
app.listen(process.env.PORT || 4000, function(){
    console.log("Now listening for requests")
})
