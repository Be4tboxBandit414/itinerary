var express = require('express');
var app = require("express")();
var http = require("http").Server(app);
var io = require('socket.io')(http);
var path = require('path');
var moment = require('moment')();


// Middleware

app.use(express.static('public'));

// Route to chat
app.get('/chat', function(req, res) {
  res.sendFile(__dirname + '/public/chat.html');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});



// On connection...
io.on('connect', function(socket){
  console.log("LET'S GO!");
  socket.on('new message', function(msg){
    console.log('message is ' + msg + " ");
    io.emit('new message', msg);
  });
});

// Server listening on envirenment or localhost:3000
http.listen(process.env.PORT || 3000, function(){
  if (http.listen(process.env.PORT)) {
    console.log("Listening on Process Envirenment Port");
  } else if (http.listen(3000)) {
    console.log('Listening on port: 3000');
  } else {
    console.log("Error");
  }
});
