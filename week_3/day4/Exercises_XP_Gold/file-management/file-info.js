const fs = require('fs')
const path = require('path');


function infoFile(){
    const file = path.join(process.cwd(), 'data', 'example.txt')
    if(fs.existsSync(file)){
        console.log("size of file: ",fs.statSync(file).size);
        console.log("creation time the file: ",fs.statSync(file).atime);
    }
} 

module.exports = { infoFile };