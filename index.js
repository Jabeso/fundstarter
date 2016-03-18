/*1A*/
/*
var fs = require('fs')
var http = require('http')
var port = process.env.PORT || 8080

var requestListener = function(request, response){
    response.end(fs.readFileSync('index.html'), 'utf8');
}

var server = http.createServer(requestListener);
server.listen(port);
console.log("Listening on port: " + port);
*/

/*1B*/
/*
var fs = require('fs')
var http = require('http')
var port = process.env.PORT || 8000

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
*/
var fs = require('fs')
var http = require('http')
var fileName = "index.html";
var port = process.env.PORT || 8000

var requestListener = function (request, response) { 
	fs.exists(fileName, function(exists) {
	  if (exists) {
	    fs.stat(fileName, function(error, stats) {
	      fs.open(fileName, "r", function(error, fd) {
	        var buffer = new Buffer(stats.size);

	        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
	          var data = buffer.toString("utf8", 0, buffer.length);
	          response.writeHead(200);
			  response.end(data,'utf8');
	          fs.close(fd);
	        });
	      });
	    });
	  }
	});
}

var server = http.createServer(requestListener);
server.listen(port);
console.log('Server running on port: ', port)