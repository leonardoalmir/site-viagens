const menuBtn = document.querySelector(".menu-mobile-btn");
const navegacao = document.querySelector(".navegacao");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navegacao.classList.toggle("active");
});