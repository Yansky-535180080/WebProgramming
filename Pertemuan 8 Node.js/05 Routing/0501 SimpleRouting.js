const { Http2ServerRequest } = require("http2");

const routeResponseMap = {
    "/info": "<h1>Info Page</h1>", 
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn more about us.</h1>", 
    "/hello": "<h1>Say Hello by emailing us here.", 
    "/error": "<h1>Sorry the page you're looking for is not here."
};

const port = 3000;
http = require('http');
httpStatus = require('http-status-codes');
app = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });

    if (routeResponseMap[req.url]) {
        res.end(routeResponseMap[req.url]);
    }
    else {
        res.end("<h1>Welcome!</h1>");
    }
});

app.listen(port);

console.log(`Server has started and is listening at port ${port}`);