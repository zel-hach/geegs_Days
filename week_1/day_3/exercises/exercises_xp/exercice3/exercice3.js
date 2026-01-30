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