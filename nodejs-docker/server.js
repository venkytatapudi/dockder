var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('jaffer langa!');
});
server.listen(8080);
