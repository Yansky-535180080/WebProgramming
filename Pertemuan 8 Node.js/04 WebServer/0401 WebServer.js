const port = 3000;
http = require('http');
httpStatus = require('http-status-codes');

app = http.createServer((request, response) => {
    console.log('Received incoming request!');

    response.writeHead(httpStatus.OK, { 'Content-type': 'text/html' });

    let responseMessage = '<h1>Hello World!</h1>';

    response.write(responseMessage);

    response.end();

    console.log(`Sent a repsonse: ${responseMessage}`);
});

app.listen(port);

console.log(`The server has started and its listening on port number: ${port}`);