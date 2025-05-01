/**
 * Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
 * a média aritmética desses números.
 */

const prompt = require('prompt-sync')();

function solicitaNumeros() {
    let numeros = [];
    while (true) {
        numero = prompt('Digite um número inteiro (ou 0 para sair): ');
        if (!isNaN(numero) && !Number.isInteger(Number(numero)) || Number(numero) === 0) {
            if (Number(numero) === 0) {
                break;
            }
            numeros.push(Number(numero));
        } else {
            console.log('Por favor, digite um número inteiro válido.');
        }
    }
    return numeros;
}

function calculaMedia(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return (soma / numeros.length).toFixed(2); // Formata a média para duas casas decimais
}

const numeros = solicitaNumeros();
console.log('Você digitou os números: ', numeros);
console.log(`A média dos números é: ${calculaMedia(numeros)}`);