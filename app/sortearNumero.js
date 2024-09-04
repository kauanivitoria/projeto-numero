const menorValor = 1;
const maiorValor = 100;
const numerosecreto = gererNumeroAleatorio()

function gererNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)

}

console.log(numerosecreto)

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.get

