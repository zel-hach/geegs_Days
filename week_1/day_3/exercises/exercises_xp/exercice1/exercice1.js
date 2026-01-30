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