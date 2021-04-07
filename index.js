require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/',require('./routes/api'));

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('Connected to Database')});

app.listen(process.env.PORT || 4000, () =>{
    console.log("Now listening for requests")
})
