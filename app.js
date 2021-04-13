var express = require('express');
var app = express();
var http = require('http').Server(app);
var c = require('./config.json');
var io = require('net');
var chalk = require('chalk');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
var uuid = require('uuid');
var handlebar = require('hbs');
var logger = require('winston');
var crypto = require('crypto');
var fs = require('fs');
var rsa = require('node-rsa');

console.log("*********************************************");

//getting public html and boostrap
app.use(express.static(__dirname + '/public'));

//configure middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


//setting up passport
app.use(session({
    name: 'Climate Action Beacon1',
    secret: 'secret handshake',
    saveUninitialized: true,
    resave: true
}));
app.use(passport.initialize());
app.use(passport.session());



var controller = {};

//database
require('./app/database.js')(chalk);

//routing
require('./app/routes.js')(app, passport, controller, logger);

//passport
require('./app/passport.js')(passport, controller, LocalStrategy);

// server
var server = require('./app/server.js')(http, c.port, chalk);
