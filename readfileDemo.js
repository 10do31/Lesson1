// This is a demonstration of how to read a file in node.js.
// Also how to create a new file if one is not present.

var http = require('http');
var fs = require('fs');
// Creating a file using append method.
fs.appendFile('myNewFile1.txt', 'Hello World!', function(err) {
    if (err) throw err;
    console.log('New file saved!');
});

// The file is called "readfiledemo.html".
// File is read and the content returned.
http.createServer(function (req, res) {
    fs.readFile('readfiledemo.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(9000);