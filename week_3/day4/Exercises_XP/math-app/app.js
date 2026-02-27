
const lodash = require('lodash');
const { Addition, Multiplication } = require('./math');

const customSum = Addition(10, 2);
const lodashSum = lodash.add(10, 2);

const customMult = Multiplication(10,2);
const lodashMult = lodash.multiply(10,2)

console.log("Custom Sum: " + customSum + " lodash Sum: " + lodashSum);
console.log( "Custom Multiplication: " + customMult + " lodash Multiplication: " + lodashMult)