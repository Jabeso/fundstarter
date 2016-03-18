/*1A*/
var fs = require('fs')
var http = require('http')
var port = process.env.port || 8080

var requestListener = function(request, response){
    response.end(fs.readFileSync('index.html'), 'utf8');
}

var server = http.createServer(requestListener);
server.listen(port);
console.log("Listening on port: " + port);
