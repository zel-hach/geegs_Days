const colorSelect = document.getElementById("colorSelect");

const button = document.getElementsByTagName("input")[0];

button.addEventListener("click", function() {
    if (colorSelect.selectedIndex !== -1) {
        colorSelect.remove(colorSelect.selectedIndex);
    }
});