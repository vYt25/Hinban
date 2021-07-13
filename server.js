var express = require('express')();
var server = require('http').Server(express);
// var io = require('socket.io')(server, { origins: '*:*'});
var io = require("socket.io")(server, {

  handlePreflightRequest: (req, res) => {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
      "Access-Control-Allow-Credentials": true
    };
    res.writeHead(200, headers);
    res.end();
  }
});


io.on('connection', function (socket) {

  // console.log("new client connected");

  socket.on('register-hinban', function (data) {

    // var res = data;

    console.log('register-hinban', JSON.stringify(data));

    io.emit('register-hinban', data);

  });

  socket.on('recieve-hinban-by-rnd-ja', function (data) {

    console.log('recieve-hinban-by-rnd-ja', JSON.stringify(data));

    io.emit('recieve-hinban-by-rnd-ja', data);
  })


  // socket.on('user-join', function(data) {

  //   var res = data;

  //   console.log('user-join', res);

  //   io.emit('user-join', res);
  // });

  // socket.on('disconnect', function(data) {

  //   console.log('disconnect');

  //   io.emit('user-unjoin', 'one user');
  // });

});

server.listen(9090, function () {

  console.log('socket-server listen at 9090');

});