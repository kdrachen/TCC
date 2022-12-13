/* Dispara evento ao clicar na logo da empresa */

let voltarParaCima = document.querySelector('#home');

voltarParaCima.addEventListener('click', function () {
    window.scrollTo(0, 0);
});

// Menu responsivo

document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

// Function para abrir o insta no Card

function abrirInsta() {
    let brunoInsta = document.querySelector('.card-1');
    brunoInsta.addEventListener('click', function () {
        window.open('https://www.instagram.com/holzbruno/');
    });

    let nataInsta = document.querySelector('.card-2');
    nataInsta.addEventListener('click', function () {
        window.open('https://www.instagram.com/xiaohuolong0788/');
    });

    let gabrielInsta = document.querySelector('.card-3');
    gabrielInsta.addEventListener('click', function () {
        window.open('https://www.instagram.com/nipponic_ofc/');
    });

    let lucasInsta = document.querySelector('.card-4');
    lucasInsta.addEventListener('click', function () {
        window.open('https://www.instagram.com/llukasoliveira/');
    });
}

abrirInsta();

// Pegando form, previnindo o recarregamento da tela e fazendo a condição do IMC

const pegarForm = document.querySelector('.form');
const pegarDiv = document.querySelector('.resultado');

pegarForm.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const peso = document.querySelector('#input-1');
    const altura = document.querySelector('#input-2');

    const imc = peso.value / (altura.value * altura.value);

    if (imc <= 18.5) {
        console.log(`Abaixo do peso, imc: ${imc.toFixed(1)}!`);
        pegarDiv.innerHTML = `<p style="background-color: yellow; padding: 10px; margin-top: 10px;">Seu IMC é ${imc.toFixed(
            1
        )} (Abaixo do peso)</p>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(`Peso normal, imc: ${imc.toFixed(1)}!`);
        pegarDiv.innerHTML = `<p style="background-color: #3ed14c; padding: 10px; margin-top: 10px;">Seu IMC é ${imc.toFixed(
            1
        )} (Peso normal)</p>`;
    } else if (imc >= 25 && imc <= 29.9) {
        console.log(`Sobrepeso, imc: ${imc.toFixed(1)}!`);
        pegarDiv.innerHTML = `<p style="background-color: yellow; padding: 10px; margin-top: 10px;">Seu IMC é ${imc.toFixed(
            1
        )} (Sobrepeso)</p>`;
    } else if (imc >= 30 && imc <= 34.9) {
        console.log(`Obesidade grau 1, imc: ${imc.toFixed(1)}!`);
        pegarDiv.innerHTML = `<p style="background-color: yellow; padding: 10px; margin-top: 10px;">Seu IMC é ${imc.toFixed(
            1
        )} (Obesidade grau 1)</p>`;
    } else if (imc >= 35 && imc <= 39.9) {
        console.log(`Obesidade grau 2, imc: ${imc.toFixed(1)}!`);
        pegarDiv.innerHTML = `<p style="background-color: yellow; padding: 10px; margin-top: 10px;">Seu IMC é ${imc.toFixed(
            1
        )} (Obesidade grau 2)</p>`;
    } else if (imc >= 40) {
        console.log(`Obesidade grau 3, imc: ${imc.toFixed(1)}!`);
        pegarDiv.innerHTML = `<p style="background-color: red; padding: 10px; margin-top: 10px;">Seu IMC é ${imc.toFixed(
            1
        )} (Obesidade grau 3)</p>`;
    } else if (peso >= 595) {
        pegarDiv.innerHTML = `<p style="background-color: red; padding: 10px; margin-top: 10px;">Peso inválido</p>`;
    } else {
        pegarDiv.innerHTML = `<p style="background-color: red; padding: 10px; margin-top: 10px;">Peso inválido</p>`;
    }
});

// Disparando evento de ir até o shop.html pelo botão no footer da home.html

function abrirLink() {
    window.location.href = './shop.html';
}   

// Cards - Loja

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