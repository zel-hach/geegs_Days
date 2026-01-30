// ===== Exercise 1

const sayHello = () => {
  console.log("Hello, World!");
};
setTimeout(sayHello, 2000);

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
// ===== Exercise 2

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...