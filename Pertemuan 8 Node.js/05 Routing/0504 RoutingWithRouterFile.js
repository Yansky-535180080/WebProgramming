const port = 3000;
http = require('http');
httpStatus = require('http-status-codes');
router = require('./Router');
fs = require('fs');

plainTextContentType = {
    "Content-type": "text/plain"
};

customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
        if (erros) {
            console.log("Error reading the file...");
        }
        res.end(data);
    });
};

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    customReadFile("views/index.html");
});

router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end("POSTED");
});

http.createServer(router.handle).listen(3000);

console.log(`The server is listening on port number ${port}`);