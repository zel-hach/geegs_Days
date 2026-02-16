
////////////////////////////////////////////////////////////////////////////////////// exercice 1 /////////////////////////////////////////////////////////////
const test= [1, 2, 3].map(num => {
  if (typeof num === 'number') 
    return num * 2;
  return ;
});

console.log(test); // => [2,4,6]

////////////////////////////////////////////////////////////////////////////////////// exercice 2 /////////////////////////////////////////////////////////////
const test1 = [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);// concat tables in table 
  },
  [1, 2], // inisial new table 
);
console.log(test1); // => [ 1, 2, 0, 1, 2, 3 ]

////////////////////////////////////////////////////////////////////////////////////// exercice 3 /////////////////////////////////////////////////////////////

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i); // i = 0,1,2,3,4,5
    // alert(num);
    return num * 2;
}) //=> value of i = 5

////////////////////////////////////////////////////////////////////////////////////// exercice 4 /////////////////////////////////////////////////////////////

const array = [[1],[2],[3],[[[4]]],[[[5]]]];

const concatArray = array.reduce((acc,cur)=> acc.concat(cur)).map((item)=> Array.isArray(item) ? item.flat() : item);
console.log(concatArray);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const flatTable = greeting.map((item)=> item.reduce((acc,cur)=>acc.concat(' '+cur)));
console.log(flatTable);
const arrayTostring = flatTable.join(' ');
console.log(arrayTostring);


const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const trapped3 = trapped.flat(Infinity);
console.log(trapped3);
