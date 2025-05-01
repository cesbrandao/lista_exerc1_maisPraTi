/**
 * Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
 * 10) utilizando um loop for.
 */

const prompt = require('prompt-sync')();

function solicitaNumero() {
    let numero;
    while (true) {
        numero = prompt('Digite um número inteiro: ');
        if (!isNaN(numero) && Number.isInteger(Number(numero)) && Number(numero) >= 0) {
            return Number(numero);
        } else {
            console.log('Por favor, digite um número inteiro válido.');
        }
    }
}

function calculaTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

const numero = solicitaNumero();
calculaTabuada(numero);