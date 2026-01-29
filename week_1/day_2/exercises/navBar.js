const div = document.getElementById('navBar');
div.setAttribute('id','socialNetworkNavigation');
// console.log(div);
const list = document.getElementsByTagName('ul');
const li1 = document.createElement('li');
li1.innerHTML = "logout";
list[0].appendChild(li1);

console.log(`firstElement: ${list[0].firstElementChild.textContent} lastElement: ${list[0].lastElementChild.textContent}`)
