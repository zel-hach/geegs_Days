// ===== Exercise 1
const displayNumbersDivisible = (divisor) => {
const arr = [];
for(let i = 0;i <= 500 ;i++)
{
    arr.push(i);
}
const allNumberDiv23 = arr.filter((array)=> array % 23 === 0);
console.log(`all the numbers divisible by 23: ${allNumberDiv23}`);
const sum = allNumberDiv23.reduce((total,value) => total + value,0);
console.log("and their sum",sum);
// bonus
const allNumberDivDivisor = arr.filter((array)=> array % divisor === 0);
console.log(`all the numbers divisible by ${divisor}: ${allNumberDivDivisor}`);
const sumDivisor = allNumberDivDivisor.reduce((total,value) => total + value,0);
console.log("and their sum: ",sumDivisor);
}
displayNumbersDivisible(3);
// displayNumbersDivisible(45);



// ===== Exercise 2

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList = ["banana","apple","orange"]

function myBill(){
    let sum = 0;
    for(let shoppingelement in shoppingList)
    {
        if(shoppingList[shoppingelement] in stock)
        {    
            sum += prices[shoppingList[shoppingelement]];
        }
    }
    return(sum + '$');
}
console.log("total price: ",myBill());

const decreaseStock = () =>{
    for(let shoppingelement in shoppingList)
    {
        if(shoppingList[shoppingelement] in stock && stock[shoppingList[shoppingelement]]> 0 )
        {    
            stock[shoppingList[shoppingelement]] = stock[shoppingList[shoppingelement]] - 1;
        }
    }
    console.log(stock);
}
decreaseStock();
// ===== Exercise 3

function changeEnough(itemPrice, amountOfChange){
    const changes = [0.25,0.10,0.05,0.01];
    const sumchanges = amountOfChange.reduce((sumchange,value,index) => sumchange + value * changes[index],0);
    if(sumchanges>=itemPrice)
        return(true)
    else
        return(false);
}
console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2,100,0,0]));
// ===== Exercise 4

function hotelCost(){
    var readline = require('readline-sync');
    let numberofNights = readline.question("enter the number of nights they would like to stay in the hotel please: ");
    while(!numberofNights && isNaN(numberofNights))
    {
        numberofNights = readline.question("enter the number of nights they would like to stay in the hotel please: ");
    }
    return(numberofNights * 140) +'$';
}
// console.log(hotelCost());

function planeRideCost(){
    var readline = require('readline-sync');
    let Destination = readline.question("enter your destination please: ");
    while(Destination && !isNaN(Destination)){
        Destination = readline.question("enter your destination please: ");
    }
    Destination.toUpperCase();
    if(Destination === "LONDON")
        return 183 +'$';
    else if(Destination ==="PARIS")
        return 220 + '$';
    else
        return 300 + '$'
}
// console.log(planeRideCost());

const rentalCarCost = () => {
    var readline = require('readline-sync');
    let NumberofDay = readline.question("enter the number of days they would like to rent the car: ");
    while(!NumberofDay && isNaN(NumberofDay))
    {
        NumberofDay = readline.question("enter the number of days they would like to rent the car: ");
    }
    if(NumberofDay > 10)
    {
        return(NumberofDay * 40 * 0.95)
    }
    return(NumberofDay * 40);

}

// console.log(rentalCarCost());

function totalVacationCost() {
    return `The car cost: ${rentalCarCost()} , the hotel cost: ${hotelCost()}, the plane tickets cost: ${planeRideCost()}`
}

console.log(totalVacationCost());
// ===== Exercice 5 check other files user.html and user.js

// ===== Exercice 6 check other files NavBar.html and navBar.js

// ===== Exercice 7 check other files BookList.html and BookList.js
