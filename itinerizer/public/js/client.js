// Client-side

$(function() {
    var socket = io();
    var message = $('#m');

    $('form').submit(function(){
      socket.emit('new message', message.val());
      message.val('');
      return false;
  });
      socket.on('new message', function(msg){
     $('#messages').append($('<li>').text(msg));
   });
});
