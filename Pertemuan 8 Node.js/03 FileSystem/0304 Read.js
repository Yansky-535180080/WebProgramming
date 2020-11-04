var fs = require('fs');
var buff = new Buffer(1024);

console.log('Goign to open an existing file');
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.log(err);
    }

    console.log('File opened successfully!');
    console.log('Going to read the file');

    fs.read(fd, buff, 0, buff.length, 0, function(err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + ' bytes read');

        // Print only read bytes to avoid junk.
        if (bytes > 0) {
            console.log(buff.slice(0, bytes).toString());
        }
    });
});