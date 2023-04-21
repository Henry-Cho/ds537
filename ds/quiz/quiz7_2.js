const fs = require('fs');
const path = require('path');

function traverseDirectory(directory) {
    console.log(`Traversing directory: ${directory}`);
    if (fs.statSync(directory).isFile()) {
        console.log(`Found file: ${directory}`);
    } else if (fs.statSync(directory).isDirectory()) {
        fs.readdirSync(directory).forEach(function(filename) {
            traverseDirectory(path.join(directory, filename));
        });
    }
}

// example usage
const directory = "/Users/hyungseokcho/learn-git";
traverseDirectory(directory);