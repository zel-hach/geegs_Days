const chalk = require('chalk').default;

function colorfullMessage(message) {
    console.log(chalk.blue(message)); 
}

module.exports = { colorfullMessage };