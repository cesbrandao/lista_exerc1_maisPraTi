/**
 * Escreva um programa que solicita ao usuário 5 números e calcula a soma total
 * utilizando um loop for.
 */

const prompt = require('prompt-sync')();

function solicitaNumeros() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        let numero;
        while (true) {
            numero = prompt(`Digite o ${i + 1}º número: `);
            if (!isNaN(numero)) {
                numeros.push(Number(numero));
                break;
            } else {
                console.log('Por favor, digite um número inteiro válido.');
            }
        }
    }
    return numeros;
}

function somaNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma.toFixed(2); // Formata a soma para duas casas decimais
}

const numeros = solicitaNumeros();
console.log(`A soma dos números é: ${somaNumeros(numeros)}`);