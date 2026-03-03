const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;

rl.question('Enter your full name : ', (fullName) => {
    if (nameRegex.test(fullName)) {
        console.log('Valid name');
    } else {
        console.log('Name must contain only letters, one space, and start with uppercase letters.');
    }
    rl.close();
});