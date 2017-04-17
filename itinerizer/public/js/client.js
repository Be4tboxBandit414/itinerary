// Client-side

$(function() {

// Variables
    var socket = io();
    var message = $('#m');

// Message is submitted
    $('form').submit(function(){
      var date = moment();
      var messageMoment = date.format('h:mm:ss MM/DD/YYYY');
      socket.emit('new message', message.val() + " " + messageMoment);
      message.val('');
      return false;
  });
      socket.on('new message', function(msg){
     $('#messages').append($('<li>').text(msg));
   });
});
