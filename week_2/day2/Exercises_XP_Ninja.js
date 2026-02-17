
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////Exercice 1 ////////////////////////////////////////////////////////////////////

const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

let sumYears = 0;
for(let da of data){
  if(da.type === 'dog')
  {
    sumYears += da.age * 7;
  }
}
console.log(sumYears)

let sum = data.filter((d)=>d.type === 'dog').reduce((acc,cur)=>acc + cur.age * 7,0);
console.log(sum);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////Exercice 2 ////////////////////////////////////////////////////////////////////

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '

const usertrim = userEmail3.trim();
console.log(usertrim);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////Exercice 3 ////////////////////////////////////////////////////////////////////

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const newUsers = [];

users.map((user)=>{
    const fullName = user.firstName + " " + user.lastName;
    return newUsers[fullName] = user.role;
});
console.log(newUsers);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////Exercice 4 ////////////////////////////////////////////////////////////////////

const letters = ['x', 'y', 'z', 'z'];
let numbersLetters = {};

for(let i =0;i<letters.length; i++){
  if(numbersLetters[letters[i]])
    numbersLetters[letters[i]] += 1;
  else
    numbersLetters[letters[i]] = 1;
}
console.log(numbersLetters)

const obj = letters.reduce((acc,cur)=>
  {
    if(acc[cur])
      acc[cur] = acc[cur] + 1
    else
      acc[cur] = 1;
    return(acc);
  },{})
console.log(obj)