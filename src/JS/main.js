const hambuger = document.getElementById("hambuger");
const navbar = document.getElementById("navbar");

hambuger.addEventListener("click", () => {
    navbar.classList.toggle("active")
})