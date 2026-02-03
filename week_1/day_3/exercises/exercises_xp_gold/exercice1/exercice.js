const selectElement = document.getElementById("genres");
selectElement.addEventListener("change", function() {
    console.log(this.value);
});
selectElement.innerHTML += `<option value="classic" selected>Classic</option>`;

