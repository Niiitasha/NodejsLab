// server.js
var http = require("http");
var tasks = require('./task.js');

http.createServer(function(request, response) {
response.writeHead(200,{"Content-type" : "text/plain"});
response.write(/*random array generator*/);
response.end(tasks.taskDone);
}).listen(3000);
