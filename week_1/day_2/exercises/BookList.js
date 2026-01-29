
const allBooks = [
     {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-red-image_15684333.jpg",
    alreadyRead: true
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg",
    alreadyRead: false
  }
]

const section = document.getElementsByClassName("listBooks");
for(let book of allBooks){
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = book.title + " " + book.author;
    const img = document.createElement("img");
    img.src=book.image;
    img.width=100;
    if(book.alreadyRead)
      p.style.color ="red";
    div.appendChild(p);
    div.appendChild(img);
    section[0].appendChild(div);
}