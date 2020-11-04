var fs = require('fs');

// Asynchronous Read
fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log('Asynchronous read: ' + data.toString());
});

// Synchronous Read
var data = fs.readFileSync('input.txt');
console.log('Synchronous read: ' + data.toString());

console.log('Program Ended');