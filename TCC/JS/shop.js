// MENU Hamburger

document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

// Card loja

const cardUmLoja = document.querySelector('#card-loja-1');
const cardDoisLoja = document.querySelector('#card-loja-2');
const cardTresLoja = document.querySelector('#card-loja-3');

cardUmLoja.addEventListener('click', function() {
    window.open('https://hotmart.com/pt-br/marketplace/produtos/sono-um-guia-completo/U75611983X');
});

cardDoisLoja.addEventListener('click', function() {
    window.open('https://hotmart.com/pt-br/marketplace/produtos/foco-um-guia-completo/J75999776F?utm_term=Foco:%20um%20guia');
});

cardTresLoja.addEventListener('click', function() {
    window.open('https://hotmart.com/pt-br/marketplace/produtos/estresse-e-ansiedade-um-guia-pratico/O76302964G');
});