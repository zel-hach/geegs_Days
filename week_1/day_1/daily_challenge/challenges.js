// ====== Daily Challenge 1
const sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not");
// console.log(wordNot);
let wordBad = sentence.indexOf("bad")
console.log(wordBad);
if(wordBad > wordNot)
{
    let newsentence = sentence.slice(0,wordNot) +  "good" + sentence.slice(wordBad + 3);
    console.log(newsentence);
}
else{
    console.log(sentence);
}
// ====== Daily Challenge 2

for(let i = 0 ;i < 6 ; i++){
    let et= "";
    for(let j = 0; j < i + 1 ; j++){
        et += " *";
    }
    console.log(et);
}
// ====== Daily Challenge 3
