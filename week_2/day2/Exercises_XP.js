///////////////////////////////////////////////////////////////////////////////////// exercice1 ///////////////////////////////////////////////////////////////////

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for(let color in colors)
{
    console.log(Number(color) + 1 + '# choice is ' + colors[color]);
}

colors.map((color) =>
{
    if(color === "Violet")
    {
        console.log("Yeah");
        return
    }
    else
    {
        console.log("No...")
        return;
    }
})

///////////////////////////////////////////////////////////////////////////////////// exercice2 ///////////////////////////////////////////////////////////////////
const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors1.forEach((color,index)=>{
    index = index + 1;
    const suffix = index === 1 || index === 2 || index === 3 ? ordinal[index]:ordinal[0];
    console.log(index + suffix + ' choice is ' + color);

})



///////////////////////////////////////////////////////////////////////////////////// exercice3 ///////////////////////////////////////////////////////////////////

//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); //=>['bread',"carrot", "potato",'chicken',"apple", "orange"]
//------2------
const country = "USA";
console.log([...country]); //=> ['U','S','A']

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);//=>[ undefined, undefined ]

///////////////////////////////////////////////////////////////////////////////////// exercice4 ///////////////////////////////////////////////////////////////////

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map((user) => {
        return 'Hello ' + user.firstName;
})
console.log(welcomeStudents);

const Full_Stack_Residents = users.filter((user) => user.role === 'Full Stack Resident');
console.log(Full_Stack_Residents);

const firstname = Full_Stack_Residents.map((user)=>{
    return(user.firstName)
})
console.log(firstname);

///////////////////////////////////////////////////////////////////////////////////// exercice5 ///////////////////////////////////////////////////////////////////


const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combine = epic.reduce((e,value)=> e + ' ' + value);
console.log(combine);

///////////////////////////////////////////////////////////////////////////////////// exercice6 ///////////////////////////////////////////////////////////////////

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const StudentsPassed = students.filter((student)=> student.isPassed === true);

console.log(StudentsPassed);

StudentsPassed.forEach((student)=>{
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
})