// Menu do header resposnivo
const menuBtn = document.querySelector(".menu-mobile-btn");
const navegacao = document.querySelector(".navegacao");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navegacao.classList.toggle("active");
});

// Menu de navegação de slides
const slideBotoes = document.querySelectorAll(".nav-botao");
const videos = document.querySelectorAll(".video-slide");
const conteudos = document.querySelectorAll(".conteudo");

var slideMenu = function (manual) {
    slideBotoes.forEach((slideBotao) => {
        slideBotao.classList.remove('active');
    });
    videos.forEach((video) => {
        video.classList.remove('active');
    });
    conteudos.forEach((conteudo) => {
        conteudo.classList.remove('active');
    });

    slideBotoes[manual].classList.add('active');
    videos[manual].classList.add('active');
    conteudos[manual].classList.add('active');

};

slideBotoes.forEach((slideBotao, i) => {
    slideBotao.addEventListener("click", () => {
        slideMenu(i);
    });
});