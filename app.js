var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
require('dotenv').config()

const routerusers=require('./routes/user.route')

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
mongoose.set('strictQuery',false)
mongoose

    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true, 
     useUnifiedTopology: true 

    })
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
        console.error('Error connecting to Mongo', err);
    });



    app.use('/api',routerusers)


module.exports = app;
