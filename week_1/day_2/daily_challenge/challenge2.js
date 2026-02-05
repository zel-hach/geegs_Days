function displayseparatedWords(length){
    let line = '';
    for(let i=0 ; i<length; i++){
        line += '*';
    }
    console.log(line);
}

const readline = require('readline-sync');
const text = readline.question("Please enter a sentence: ");
if(!text){
    console.log("You did not enter a sentence!");
    process.exit(1);
}
const TextTable = text.split(' ');
const longestElement = TextTable.reduce((longest, current) => longest.length >= current.length ? longest : current, "");
console.log("Reversed sentence: ",longestElement.length);

displayseparatedWords(longestElement.length + 4);
for(let i=0 ; i<TextTable.length; i++){
    console.log('* ' + TextTable[i]  + ' '.repeat(longestElement.length - TextTable[i].length) + ' *');
}
displayseparatedWords(longestElement.length + 4);