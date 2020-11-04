var http = require('http');

http.createServer(function (request, responses) {
    // Send the HTTP Header
    // HTTP Status: 200 : OK
    // Content Type: tex/plain
    responses.writeHead(200, {'Content-type': 'text/plain'});
    // Send the response body as Hello World
    responses.end('Hello World Server');
}).listen(8081);

// Console will print the message
console.log(`Server running at 'http://127.0.0.1:8081/'`);