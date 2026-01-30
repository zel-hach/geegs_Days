// ===== Exercise 1
function getRandomNumber(min, max) {
    console.log(Math.random());
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    let numbers = '';
    for (let i = 0; i < randomNumber; i++)
        numbers += i + ' ';
    console.log(numbers);
}
// getRandomNumber(1, 100);

// ===== Exercise 2


const Capitalized = (str) => {
    let result = '';
    let resultupper = '';
    for(let i = 0; i < str.length; i++) {
        if(i%2 === 0) {
            resultupper += str[i].toUpperCase();
        } 
        else
        resultupper += str[i];
    }
    for(let j = 0; j < str.length; j++) {
        if(j%2 !== 0) {
            result += str[j].toUpperCase();
        }
        else
        result += str[j];
    }
    return [resultupper ,result];
}
console.log(Capitalized("hello"));
// ===== Exercise 3

function palindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(palindrome("test")); // false
console.log(palindrome("madam")); // true
// ===== Exercise 4
function biggestNumberInArray(arrayNumber){
    let biggest = 0;
    for(let i = 0; i < arrayNumber.length; i++){
        if(typeof arrayNumber[i] !== 'number' || typeof biggest !== 'number'){
            continue
        }
        else if(arrayNumber[i] > biggest){
            biggest = arrayNumber[i];
        }
    }
    if(arrayNumber.length === 0){
        return 0;
    }
    return biggest;
}
console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99])); // 100
// ===== Exercise 5 

const UniqueElements = (arr) => {
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(UniqueElements([6, 2, 3, 3, 2, 6])); // [6, 2, 3]