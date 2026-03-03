const fs = require('fs');
const path = require('path');

function readFile(fileName) {
    const filePath = path.join(__dirname, fileName);
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            console.error('Error reading file:', error.message);
        } else {
            console.log('File content:', data);
        }
    });
}


module.exports ={readFile}