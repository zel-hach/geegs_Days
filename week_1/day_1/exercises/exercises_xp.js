// ==================================== Exercise 1 ==================================================== //
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1);
// console.log("people: ",people);
people[2] = "Jason";
// console.log("people: ",people);
people.push("Zineb");
console.log("people: ",people);

const index = people.indexOf("Mery");
console.log("index: ",index);
const newPeople = people.slice(1,3);
console.log("newPeople: ", newPeople);

console.log("index of Foo : ", people.indexOf("Foo")); // indexOf is function return number
//  so return index of element if element exist ,or return -1 if element not exist

const last = people.length - 1;
console.log("last index : ",last) // lenght is a number of element exist in table and index is id of every element and index start with 0 
// and length start with 1
for(let i = 0 ;i<=people.length - 1 ; i++){
    console.log(people[i]);
}

for(let i = 0 ;i<=people.length - 1 ; i++){
    console.log(people[i]);
    if(people[i] === "Devon")
        break;
}

// ===================================================================================== Exercise 2 ======================================================== //

const colors = ['Violet','White','Blue','Black','orange','red','green'];

for(let i = 0;i< colors.length; i++)
{
    console.log('My #' + i + ' choice is ' + colors[i]);
}

for(let i = 0;i< colors.length; i++)
{
    console.log('My ' + i + 'st choice ' + colors[i]);
}



// ================================================================================== Exercise 3 ================================================//

let input;
input = prompt("Enter a number:");
let check = Number(input);
while(check < 10)
{
    input = prompt("Enter a number long than 10: ");
    check = Number(input);
}
if(isNaN(check))
{
  console.log("This is not a valid number");
}
else{
    console.log("Valid number");
}


// =============================================================== Exercise 4 ================================================ //

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(" the number of floors in the building : ", building.numberOfFloors);
console.log("number of apartement in floor 1: ", building.numberOfAptByFloor.firstFloor);
console.log("number of apartement in floor 3: ", building.numberOfAptByFloor.thirdFloor);
console.log("name of second tenant: ", building.nameOfTenants[1]);
console.log("number of room in his apparetement: ", building.numberOfRoomsAndRent.dan[0]);

const sum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
if(sum > building.numberOfRoomsAndRent.sarah[1])
{
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan);

// ============================================================ Exercise5 ====================================================== //


const family = {
  father: "Ahmed",
  mother: "Fatima",
  daughter: "Zineb",
  son: "Youssef"
};

for(fa in family)
{
    console.log(fa);
}
for(fa in family)
{
    console.log(family[fa]);
}

// ============================================================ Exercise6 ====================================================== //

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let text = ' ';
for(key in details)
{
    text += key + ' ' + details[key] + ' ';
}
console.log(text);


// ============================================================ Exercise7 ====================================================== //

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let nameSociete = '';
for(let i= 0 ; i < names.length; i++)
{
    console.log(names[i]);
    nameSociete += names[i].charAt(0);
}
console.log(nameSociete);