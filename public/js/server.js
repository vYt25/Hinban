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


  socket.on('hinban-approval-by-rnd-ja', function (data) {

    console.log('hinban-approval-by-rnd-ja', JSON.stringify(data));

    io.emit('hinban-approval-by-rnd-ja', data);

  })

  socket.on('hinban-revision-by-localstaff', function (data) {

    console.log('hinban-revision-by-localstaff', JSON.stringify(data));

    io.emit('hinban-revision-by-localstaff', data);

  })

  socket.on('recieve-hinban-by-logistics', function (data) {

    console.log('recieve-hinban-by-logistics', JSON.stringify(data));

    io.emit('recieve-hinban-by-logistics', data);

  })


  socket.on('hinban-recieve-by-class-a-approver', function (data) {

    console.log('hinban-recieve-by-class-a-approver', JSON.stringify(data));

    io.emit('hinban-recieve-by-class-a-approver', data);

  })

  socket.on('hinban-approval-by-class-a-approver', function (data) {

    console.log('hinban-approval-by-class-a-approver', JSON.stringify(data));

    io.emit('hinban-approval-by-class-a-approver', data);

  })

  socket.on('hinban-approval-by-logistics', function (data) {

    console.log('hinban-approval-by-logistics', JSON.stringify(data));

    io.emit('hinban-approval-by-logistics', data);

  })

  socket.on('hinban-approve-by-nts', function (data) {

    console.log('hinban-approve-by-nts', JSON.stringify(data));

    io.emit('hinban-approve-by-nts', data);

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
const port = 9090;
server.listen(port, function () {

  console.log('Hinban Registration Socket Server Listening @ ' + port);

});