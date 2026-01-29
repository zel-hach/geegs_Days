// exercice 5
const div = document.getElementById("container");
// console.log(div);

const lists = document.getElementsByTagName('li');
// console.log(lists[1].innerHTML);
lists[1].innerHTML = "Richard";
// console.log(lists[1].innerHTML);
const Listsul = document.getElementsByClassName('list');
Listsul[1].getElementsByTagName('li')[1].remove();

// console.log(Listsul);
for(let i = 0 ;i<Listsul.length;i++)
{
    Listsul[i].getElementsByTagName('li')[0].innerHTML = "Zineb";
    Listsul[i].classList +=' student_list';
    console.log(Listsul[i].innerHTML);
}

Listsul[0].classList +=' university attendance';

div.style="padding:5px;background-color:lightblue";

for(l of lists){
    if(l.innerHTML ==="Dan")
        l.style = "display:none";
    if(l.innerHTML ==="Richard")
        l.style = "border:1px solid black";
}
document.body.style.fontSize= "30px";
if(div.style.backgroundColor === "lightblue")
    alert("Hello x and y");
