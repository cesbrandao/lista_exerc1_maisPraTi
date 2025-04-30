/*
Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/

const prompt = require('prompt-sync')();

function solicitaNumero() {
    let numero;
    while (true) {
        numero = prompt('Digite um número inteiro: ');
        if (!isNaN(numero) && Number.isInteger(Number(numero))) {
            return Number(numero);
        } else {
            console.log('Por favor, digite um número inteiro válido.');
        }
    }
}

function verificaParOuImpar(numero) {
    if (numero % 2 === 0){
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é ímpar.`);
    }
}

const numero = solicitaNumero();
verificaParOuImpar(numero);