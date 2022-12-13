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
        pegarDiv.innerHTML = `<p style="background-color: #f5a940; padding: 10px; margin-top: 10px;">Seu IMC é ${imc.toFixed(
            1
        )} (Sobrepeso)</p>`;
    } else if (imc >= 30 && imc <= 34.9) {
        console.log(`Obesidade grau 1, imc: ${imc.toFixed(1)}!`);
        pegarDiv.innerHTML = `<p style="background-color: #e2565c; padding: 10px; margin-top: 10px;">Seu IMC é ${imc.toFixed(
            1
        )} (Obesidade grau 1)</p>`;
    } else if (imc >= 35 && imc <= 39.9) {
        console.log(`Obesidade grau 2, imc: ${imc.toFixed(1)}!`);
        pegarDiv.innerHTML = `<p style="background-color: #d33b46; padding: 10px; margin-top: 10px;">Seu IMC é ${imc.toFixed(
            1
        )} (Obesidade grau 2)</p>`;
    } else if (imc >= 40) {
        console.log(`Obesidade grau 3, imc: ${imc.toFixed(1)}!`);
        pegarDiv.innerHTML = `<p style="background-color: red; padding: 10px; margin-top: 10px;">Seu IMC é ${imc.toFixed(
            1
        )} (Obesidade grau 3)</p>`;
    } else if (peso >= 595) {
        pegarDiv.innerHTML = `<p style="background-color: red; padding: 10px; margin-top: 10px;">Peso ou altura inválida!</p>`;
    } else {
        pegarDiv.innerHTML = `<p style="background-color: red; padding: 10px; margin-top: 10px;">Peso ou altura inválida!</p>`;
    }
});

function abrirLink() {
    window.location.href = './shop.html';
}
