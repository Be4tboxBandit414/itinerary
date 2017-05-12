// Variables
var express = require('express');
var app = require("express")();
var http = require("http").Server(app);
var io = require('socket.io')(http);
var path = require('path');
var moment = require('moment')();
var port = process.env.PORT || 3000;

var router = require('./public/js/routes.js');


// Middleware

app.use(express.static('public')); // set up static css and js
app.set('view engine', 'ejs'); // set up ejs for templating

// Routes

router(app);

// On connection...
io.on('connect', function(socket){
  console.log("LET'S GO!");
  socket.on('new message', function(msg){
    console.log('message is ' + msg + " ");
    io.emit('new message', msg);
  });
});

// Server listening on envirenment or localhost:3000
http.listen(port, function(){
  if (http.listen(process.env.PORT)) {
    console.log("Listening on Process Envirenment Port");
  } else if (http.listen(3000)) {
    console.log('Listening on port: 3000');
  } else {
    console.log("Error");
  }
});
