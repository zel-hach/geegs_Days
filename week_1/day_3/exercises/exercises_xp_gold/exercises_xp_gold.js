//exercise 1 check the exercice1.html file for the code of this exercice
const selectElement = document.getElementById("genres");
selectElement.addEventListener("change", function() {
    console.log(this.value);
});
selectElement.innerHTML += `<option value="classic" selected>Classic</option>`;

//exercise 2 check the exercice2.html file for the code of this exercice
const colorSelect = document.getElementById("colorSelect");

const button = document.getElementsByTagName("input")[0];

button.addEventListener("click", function() {
    if (colorSelect.selectedIndex !== -1) {
        colorSelect.remove(colorSelect.selectedIndex);
    }
});

//exercise 3 check the exercice3.html file for the code of this exercice

let shoppingList=[];
const div = document.getElementById('root');
const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter item';
const addButton = document.createElement('button');
addButton.type = 'submit';
addButton.textContent = 'Add Item';
const clearBUtton = document.createElement('button');
clearBUtton.type = 'button';
clearBUtton.textContent = 'Clear List';
clearBUtton.addEventListener('click', function(){
    shoppingList = [];
    console.log(shoppingList);
});
form.appendChild(input);
form.appendChild(addButton);
form.appendChild(clearBUtton);
div.appendChild(form);
console.log(shoppingList);
addButton.addEventListener('click', function(event){
    event.preventDefault();
    const newItem = input.value.trim();
    if(newItem){
        shoppingList.push(newItem);
        console.log(shoppingList);
        input.value = '';
    }
});
console.log(shoppingList);
