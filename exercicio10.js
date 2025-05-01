/**
 * Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
 */

const prompt = require('prompt-sync')();

function solicitaNumero() {
    let numero;
    while (true) {
        numero = prompt('Digite um número inteiro: ');
        if (!isNaN(numero) && Number.isInteger(Number(numero)) && Number(numero) > 0) {
            return Number(numero);
        } else {
            console.log('Por favor, digite um número inteiro válido e maior que zero.');
        }
    }
}

function repetirNumero(numero) {
    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
}

const numero = solicitaNumero();
repetirNumero(numero);