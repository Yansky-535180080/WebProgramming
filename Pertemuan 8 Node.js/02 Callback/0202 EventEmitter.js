// Import even module
var events = require('events');

// Create eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
    console.log('Connection successful.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection even with handler
eventEmitter.on('connection', connectHandler);

//Bind the data_received with the anonymous function
eventEmitter.on('data_received', function() {
    console.log('Data recieved successful.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log('Program Ended.');