/**
 * As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
 * forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
 * compradas, calcule e escreva o valor total da compra.
 */

const prompt = require('prompt-sync')();

function quantidadeMacas() {
    let quantidade;
    while (true) {
        quantidade = prompt('Digite a quantidade de maçãs: ');
        if (!isNaN(quantidade) && Number.isInteger(Number(quantidade)) && Number(quantidade) >= 0) {
            return Number(quantidade);
        } else {
            console.log('Por favor, digite uma quantidade válida.');
        }
    }
}

function calculaPreco(quantidade) {
    let precoPorMaca = 0.30;
    if (quantidade >= 12) {
        precoPorMaca = 0.25;
    }
    return quantidade * precoPorMaca;
}

const quantidade = quantidadeMacas();
console.log(`A quantidade de maçãs é: ${quantidade}, totalizando R$ ${calculaPreco(quantidade).toFixed(2)}`);