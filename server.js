var fs = require('fs');
var app = require('http').createServer( function (req, res) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) return res.writeHead(500);

        res.writeHead(200);
        res.end(data);
    });
});

var io = require('socket.io').listen(app, { log: false });
io.sockets.on('connection', function (socket) {
    setInterval(function () {
        socket.emit('pulse', 1);
    }, 1000);
});

app.listen(8000);
