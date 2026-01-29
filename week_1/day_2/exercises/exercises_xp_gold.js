// ===== Exercise 1
function isBlank(str) {
  return str === '';
}

// console.log(isBlank(''));
// console.log(isBlank('abc'));

// ===== Exercise 2

const abbrevName = (name) => {
    const names = name.split(' ');
    return names[0]+ '.' + names[1].charAt(0).toUpperCase();  
}
// console.log(abbrevName("Robin Singh")); 
// ===== Exercise 3
const swapUper_to_Lower = (str) => {
    let swapped = '';
    for(let i=0; i<str.length; i++){
        const char = str.charAt(i); 
        if(char === char.toUpperCase()){
            swapped += char.toLowerCase();
        }  
        else{
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}  
// console.log(swapUper_to_Lower("The Quick Brown Fox"));

// ===== Exercise 4
const Omnipresent = (arr, val) => {
    for(let i=0; i<arr.length; i++){
        if(!arr[i].includes(val)){
            return false;
        }
    }
    return true;
}
// console.log(Omnipresent([[1, 1], [1, 3], [5, 1], [1, 6]], 1));
// console.log(Omnipresent([[1, 1], [1, 3], [5, 1], [1, 6]], 5));
// ===== Exercise 5 check file exercise_xp_gold.html