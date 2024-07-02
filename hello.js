var http = require('http');
var dt = require('./datemodule');

// The function passed into the http.createServer() has a req argument.
// The req argument represents the request from the client.....
// .....as an object (http.IncomingMessage object).
// This object has a property called "url"....
// ....which holds the part of the url that comes after the domain name.
// Credit to w3schools.com.
http.createServer(function (req, res) {
  // The first argument of the res.writeHead() method is the status code.
  // 200 means that all is OK.
  // The second argument is an object containing the response headers.
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello World!');
}).listen(9000);