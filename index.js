/*1A*/
/*
var fs = require('fs')
var http = require('http')
var port = process.env.port || 8080

var requestListener = function(request, response){
    response.end(fs.readFileSync('index.html'), 'utf8');
}

var server = http.createServer(requestListener);
server.listen(port);
console.log("Listening on port: " + port);
*/

/*1B*/
var fs = require('fs')
var http = require('http')
var port = process.env.port || 8000

var requestListener = function(request, response){
    fs.readFile('index.html' , function(error, content){
    	if (error){
    		response.writeHead(500);
    		return console.log(error);
    	}else{
    		response.writeHead(200);
    		response.end(content, 'utf8');
    	}
    });
}

var server = http.createServer(requestListener);
server.listen(port);
console.log("Listening on port: " + port);