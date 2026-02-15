
/////////////////////////////////////////////////////////////////////////// exercice1 ///////////////////////////////////////////////////////
let mergeWords = (x) => (y) => {
        if (!y) 
            return x;
        return mergeWords(x + ' ' + y);
};

// console.log(mergeWords('Hello')());


const mergeWords = (str = "") => (next) =>
  next === undefined ? str : mergeWords(str + (str ? " " : "") + next);
console.log(mergeWords("Hello")("world")("!")());
