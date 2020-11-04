var fs = require('fs');

// Asynchronous - Opening File
console.log('Going to open file');
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.log(err);
    }
    console.log('File opened successfully!');
});