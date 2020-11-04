var fs = require('fs');

console.log('Goign to write to existing file');
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
    if (err) {
        return console.log(err);
    }

    console.log('Data written successfully!');
    console.log('Let\'s read newly written data');

    fs.readFile('input.txt', function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log('Asynchronous read: ' + data.toString());
    });
});