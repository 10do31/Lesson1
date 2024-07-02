// The URL module splits up a web address into readable parts.
// To include the URL module, use the require() method.
// The script below will open both summer.html & winter.html.
// Once opened, the files are parsed, contents returned to the client. 
// If anything goes wrong, throw a 404 error.
// uc is to convert output into upper case letters.

var http = require('http');
var fs = require('fs');
var url = require('url');
//var uc = require('upper-case');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        //res.write(uc.upperCase("This is an uupercase Test!"));
        return res.end();
    });
}).listen(9000);