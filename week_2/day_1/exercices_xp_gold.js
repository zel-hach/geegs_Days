////////////////////////////////////////////////////////////////////// exercice1 //////////////////////////////////////////////////////////////////////////
// 1)
let landscape = function() {

 let result = "";

 let flat = function(x) {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }

 let mountain = function(x) {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4); // result = ____ 
 mountain(4); //result = ____/''''\\
 flat(4) // result = ____/''''\\____

 return result;
}
landscape() // this function return  ____/''''\\____
// console.log(landscape())


//2))
let landscape1 = () =>{

 let result = "";

 let flat = (x) =>{
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }

 let mountain = (x) => {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4); // result = ____ 
 mountain(4); //result = ____/''''\\
 flat(4) // result = ____/''''\\____

 return result;
}
landscape1()

//////////////////////////////////////////////////////////////////exercice2///////////////////////////////////////////////////////////////
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3); // => 3+10 = 13
///////////////////////////////////////////////////////////////////////exercice3////////////////////////////////////////////////////////
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)// => 31

/////////////////////////////////////////////////////////////////////////exercice4/////////////////////////////////////////////////////
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
console.log(add5(12)) //=>17

////////////////////////////////////////////////////////////////////////exercice5//////////////////////////////////////////////////////
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) //=>16

