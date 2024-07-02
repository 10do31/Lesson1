var fs = require('fs');

// Creating a new, empty file using fs.open() method.
// This method takes a "flag" as the second argument, here, its 'w'.
// Meaning, the specified file is opened for writing. 
// If the file does not exist, an empty file is created.
fs.open('myNewFile2.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log('New File saved!');
})