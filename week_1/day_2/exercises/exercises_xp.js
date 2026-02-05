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

// ===== Exercice 5 check other files user.html 

// exercice 5
const div = document.getElementById("container");
// console.log(div);

const lists = document.getElementsByTagName('li');
// console.log(lists[1].innerHTML);
lists[1].innerHTML = "Richard";
// console.log(lists[1].innerHTML);
const Listsul = document.getElementsByClassName('list');
Listsul[1].getElementsByTagName('li')[1].remove();

// console.log(Listsul);
for(let i = 0 ;i<Listsul.length;i++)
{
    Listsul[i].getElementsByTagName('li')[0].innerHTML = "Zineb";
    Listsul[i].classList +=' student_list';
    console.log(Listsul[i].innerHTML);
}

Listsul[0].classList +=' university attendance';

div.style="padding:5px;background-color:lightblue";

for(l of lists){
    if(l.innerHTML ==="Dan")
        l.style = "display:none";
    if(l.innerHTML ==="Richard")
        l.style = "border:1px solid black";
}
document.body.style.fontSize= "30px";
if(div.style.backgroundColor === "lightblue")
    alert("Hello x and y");

// ===== Exercice 6 check other files NavBar.html

const div = document.getElementById('navBar');
div.setAttribute('id','socialNetworkNavigation');
// console.log(div);
const list = document.getElementsByTagName('ul');
const li1 = document.createElement('li');
li1.innerHTML = "logout";
list[0].appendChild(li1);

console.log(`firstElement: ${list[0].firstElementChild.textContent} lastElement: ${list[0].lastElementChild.textContent}`)


// ===== Exercice 7 check other files BookList.html
const allBooks = [
     {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-red-image_15684333.jpg",
    alreadyRead: true
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg",
    alreadyRead: false
  }
]

const section = document.getElementsByClassName("listBooks");
for(let book of allBooks){
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = book.title + " " + book.author;
    const img = document.createElement("img");
    img.src=book.image;
    img.width=100;
    if(book.alreadyRead)
      p.style.color ="red";
    div.appendChild(p);
    div.appendChild(img);
    section[0].appendChild(div);
}