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

