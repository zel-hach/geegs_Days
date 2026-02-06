// ===== Exercise 1


// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()  // return "inside the funcOne function 3"
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//if we declare a with const, it will throw an error because we are trying to reassign a value to a constant variable.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    console.log(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // return "inside the funcThree function 0"
funcTwo() // change the value of a to 5
funcThree() // return "inside the funcThree function 5"

// #2.2 What will happen if the variable is declared 
// with const instead of let ?

//if we declare a with const, it will throw an error because we are trying to reassign a value to a constant variable.


//#3
function funcFour() {
    window.a = "hello"; // this will create a global variable a and assign it the value "hello"
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// // #3.1 - run in the console:
funcFour() // this will create a global variable a and assign it the value "hello"
funcFive() // return "inside the funcFive function hello"

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// // #4.1 - run in the console:
funcSix() // return "inside the funcSix function test" 
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

// if declare a with const ,that's not give error because we are not trying to reassign a value to a constant variable,
//  we are just declaring a new variable with the same name in a different scope. 
// The variable a inside the function funcSix is a different variable than the variable a outside the function.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // return "in the if block 5"
}
alert(`outside of the if block ${a}`); // return "outside of the if block 2" because the variable a inside the if block is a different variable than the variable a outside the if block,

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// if we declare a with const ,that's not give error because we are not trying to reassign a value to a constant variable,
// we are just declaring a new variable with the same name in a different scope. 
// The variable a inside the if block is a different variable than the variable a outside the if block.


// ==================================================================================================== Exercise 2 ========================================================================== #

const winBattle = () => {
    return true;
};

let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints); // return 10 because winBattle() returns true, so the ternary operator will return 10.

// ================================================================================= Exercise 3 ================================================================================= #


const isString = (value) => {
    return typeof value === 'string';
};

console.log(isString('hello')); // return true because 'hello' is a string
console.log(isString([1, 2, 4, 0])); // return false because [1, 2, 4, 0] is an array, not a string

// =========================================================================== Exercise 4 ================================================================================= #

const sum = (a, b) => {
    return a + b;
};

console.log(sum(1, 2));

// ===================================================================================== Exercise 5 ================================================================================= #
//function declaration 
function kilotogram(weight){
    return weight * 1000;
}
//function expression
const kilogram = function(weight){
    return weight * 1000;
}

//difference between function declaration and function expression is that function declaration is hoisted,
//which means that it can be called before it is defined in the code,
//while function expression is not hoisted, which means that it cannot be called before it is defined in the code.

//arrow function
const kiloToGram = (weight) => {
    return weight * 1000;
};


/// ===================================================================================== Exercise 6 ================================================================================= #
// check file exercice6.html for the HTML part of the exercise
function sentenceGeneratorDom(numberofCHildren, partnerName, geographicLocation, jobTitle){
    const div = document.createElement('div');
    div.textContent = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberofCHildren} kids.`;
    document.body.appendChild(div);
}

// ===================================================================================== Exercise 7 ================================================================================= #
// check file exercice7.html for the HTML part of the exercise

    function addNavBar(username){
    const nav = document.getElementById('navbar');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const img = document.createElement('img');

    img.src="https://t3.ftcdn.net/jpg/06/01/50/96/360_F_601509638_jDwIDvlnryPRhXPsBeW1nXv90pdlbykC.jpg"
    img.alt = 'Avatar';
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.borderRadius = '50%';
    li1.textContent = username;
    li2.appendChild(img);
    ul.appendChild(li1);
    ul.appendChild(li2);
    nav.appendChild(ul);
    document.body.appendChild(nav);
}
    addNavBar('JohnDoe');

// ==================================================================================== Exercise 8 =================================================================#
//check exercice8.html for html file
function makeJuice(size){
    const Ingredients = []
    function addIngredients(firstIngredient,secondIngredient,thirdIngredient){
        Ingredients.push(firstIngredient,secondIngredient,thirdIngredient);
    }
    function DisplayJuice(){
        const sentence = `The client wants a ${size} juice, containing ${Ingredients.join(",")}, <second ingredient>, <third ingredient>".`
        document.body.textContent = sentence;
    }
    addIngredients('banana','appel','orange');
    DisplayJuice();
}
makeJuice(20);