const {readFile} = require('./files/read-file.js')
const {colorfullMessage} = require('./colorful-message.js')
const {greet} = require('./greeting.js')

colorfullMessage(greet('Zineb ELhachimi'))
readFile('file-data.txt');