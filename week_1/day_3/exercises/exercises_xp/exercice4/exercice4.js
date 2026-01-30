const form = document.getElementById("MyForm");
const btn = document.getElementById("submit");
btn.addEventListener("click", (e) => {
    e.preventDefault(); // to prevent the default behavior of form submit
    const radius = parseFloat(form.elements["radius"].value);
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    form.elements["volume"].value = volume;
});