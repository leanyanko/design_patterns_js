var fs = require('fs');
var path = require('path');

var txtFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, 'Readme.md');

var result = (err, content) => {
    if (err) {
        console.log('\x07');
        console.error(err);
        process.exit(0);
    }

    console.log('reading file');
    console.log(content);
}

fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);

