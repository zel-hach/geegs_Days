// exercise 1 check the index1.html file for the code of this exercice
setTimeout(() => {
  const container = document.getElementById("container");
  const p = document.createElement("p");
  p.textContent = "Hello, World!";
  container.appendChild(p);
}, 2000);


const taskInterval = setInterval(() => {
  const container = document.getElementById("container");
  const p = document.createElement("p");
  p.textContent = "Hello, World!";
  container.appendChild(p);
  const p1 = document.getElementsByTagName("p");
  if (p1.length >= 5) {
    clearInterval(taskInterval);
  }
}, 2000);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    clearInterval(taskInterval);
});

// exercise 2 check the index2.html file for the code of this exercice
 function myMove(){
   const elem = document.getElementById("animate");
   const container = document.getElementById("container");
   let pos = 0;
   const id = setInterval(move, 1);
   function move(){
      if(pos == container.offsetWidth - elem.offsetWidth){
         clearInterval(id);
      } else {
         pos++;
         elem.style.left = pos + "px";
      }
    }
 }