var express = require('express');
var app = express();
var http = require("http").Server(app);
var io = require('socket.io')(http);
var path = require('path');

var chatPath = path.join(__dirname, '../public/chat.html');
var landingPath = path.join(__dirname, '../public/index.html');

// Middleware
app.use(express.static('public'));

// Route to chat
app.get('/', function(req, res) {
  res.sendFile(landingPath);
});

app.get('/chat', function(req, res) {
  res.sendFile(chatPath);
});




// On connection...
io.on('connect', function(socket){
  console.log("LET'S GO!");
  socket.on('new message', function(msg){
    console.log('message is ' + msg);
    io.emit('new message', msg);
  });
});

// Server listening on localhost:3000
app.listen(3000, function(){
  console.log('listening on port: 3000');
});
