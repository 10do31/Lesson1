// Demo of event handlers.
// Every action on a computer is an event.
// Node.js has a built-in module, called "Events".
// You can create-, fire-, and listen for- your own events.
// Event handlers can be assigned to an event using EventEmitter object.
// Below is a function that will be executed when a "scream" event is fired.
// The emit() method is used to fire an event.
// Credit to w3 schools tutorial for the code.

var events = require('events');
var EventEmitter = new events.EventEmitter();

// Creating an event handler here.
var myEventHandler = function () {
    console.log(' Testing a scream!!');
}

// Assigning the event handler to an event here.
EventEmitter.on('SCREAM', myEventHandler);

// Fire the "SCREAM" event here.
EventEmitter.emit('SCREAM');

