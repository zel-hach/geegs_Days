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
