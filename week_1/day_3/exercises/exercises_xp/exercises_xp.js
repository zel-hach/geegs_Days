// ===== Exercise 1 check the exercice1.html file for the code of this exercice

const h1 = document.getElementsByTagName("h1")[0];
console.log(h1);
const article = document.getElementsByTagName("article");
article[0].lastElementChild.remove();
const h2= document.getElementsByTagName("h2")[0];
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});
const h3 = document.getElementsByTagName("h3")[0];
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

document.getElementById("btn").addEventListener("click", () => {
    const p = document.getElementsByTagName("p");
    for(let i = 0; i < p.length; i++) {
        p[i].style.fontWeight = "bold";
    }
});

h1.addEventListener("mouseover", (e) => {
    e.preventDefault();
    h1.style.fontSize = Math.floor(Math.random() * 100) + "px";
});

const p = document.getElementsByTagName("p")[1];
p.style.transition="opacity 0.5s ease-in-out";
p.addEventListener("mouseover", () => {
    p.style.opacity = "0";
});
p.addEventListener("mouseout", () => {
    p.style.opacity = "1";
});
// ===== Exercise 2 check the exercice2.html file for the code of this exercice

const form = document.body.getElementsByTagName("form");
console.log(form[0]);
const inputFirstName = form[0].elements["firstname"];
const inputLastName = form[0].elements["lastname"];
const btn = document.getElementById("submit");
console.log(inputFirstName);
console.log(inputLastName);
btn.addEventListener("click", (e) => {
    e.preventDefault(); // for remove all default behavior of the form submit 
    const firstName = inputFirstName.value;
    const lastName = inputLastName.value;
    if(firstName === "" || lastName === "") {
        alert("please enter your first name and last name");
    }
    else {
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        li1.textContent = firstName;
        li2.textContent = lastName;
        const ul = document.getElementsByClassName("usersAnswer")[0];
        ul.appendChild(li1);
        ul.appendChild(li2);
        inputFirstName.value = "";
        inputLastName.value = "";
    }
});


// ===== Exercise 3 check the exercice3.html file for the code of this exercice

var allBoldItems;
function getBoldItems() {
    const strong = document.querySelectorAll("strong");
    allBoldItems = Array.from(strong);
}
getBoldItems();
console.log(allBoldItems);
function highlight() {
    allBoldItems.forEach((item) => {
        item.style.color = "blue";
    });
}
highlight();

function returnItemsToDefault(){
    allBoldItems.forEach((item) => {
        item.style.color = "black";
    });
}

const p = document.querySelector("p");
p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", returnItemsToDefault);


// ===== Exercise 4 check the exercice4.html file for the code of this exercice
const form1 = document.getElementById("MyForm");
const btn1 = document.getElementById("submit");
btn1.addEventListener("click", (e) => {
    e.preventDefault(); // to prevent the default behavior of form submit
    const radius = parseFloat(form1.elements["radius"].value);
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    form1.elements["volume"].value = volume;
});

