/**
 * Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 * utilizando um loop for ou while.
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

function calculaFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

const numero = solicitaNumero();
console.log(`O fatorial de ${numero}! é: ${calculaFatorial(numero)}`);