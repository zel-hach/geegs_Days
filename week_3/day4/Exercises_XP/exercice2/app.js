const people = require('./data.js')

const printEvrageAge = () =>{
    const sum = people.reduce((acc,cur)=>{
        return(acc + cur.age)
    } 
    ,0);
    console.log(sum);
    const evrage = sum / people.length;
    console.log("evrage age of people: ",evrage);
}

printEvrageAge();