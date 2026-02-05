// ====== Daily Challenge 1
const form = document.getElementById("libform");
const storySpan = document.getElementById("story");

// store values for shuffle
let userValues = {};

// list of stories
const stories = [
  ({ noun, adjective, person, verb, place }) =>
    `${person} saw a ${adjective} ${noun} trying to ${verb} in ${place}.`,

  ({ noun, adjective, person, verb, place }) =>
    `One day, ${person} became a ${adjective} ${noun} and decided to ${verb} at ${place}.`,

  ({ noun, adjective, person, verb, place }) =>
    `In ${place}, ${person} found a ${noun} that was very ${adjective} and loved to ${verb}.`
];

// handle form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  // check for empty fields
  if (!noun || !adjective || !person || !verb || !place) {
    console.error("Some inputs are empty");
    alert("Please fill in all fields!");
    return;
  }

  userValues = { noun, adjective, person, verb, place };
  generateStory();
});

// bonus: shuffle button
const shuffleBtn = document.createElement("button");
shuffleBtn.textContent = "Shuffle story";
shuffleBtn.type = "button";
form.appendChild(shuffleBtn);

shuffleBtn.addEventListener("click", function () {
  if (!userValues.noun) {
    alert("Create a story first!");
    return;
  }
  generateStory();
});

function generateStory() {
  const randomIndex = Math.floor(Math.random() * stories.length);
  storySpan.textContent = stories[randomIndex](userValues);
}

// ====== Daily Challenge 2

// ====== Daily Challenge 3
