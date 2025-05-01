/**
 * Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
 * e escreve-los em ordem crescente.
 */

const prompt = require('prompt-sync')();

function solicitaValores() {
    let valor1, valor2;
    while (true) {
        valor1 = prompt('Digite o primeiro valor: ');
        valor2 = prompt('Digite o segundo valor: ');
        if (!isNaN(valor1) && !isNaN(valor2) && Number(valor1) !== Number(valor2)) {
            return [Number(valor1), Number(valor2)];
        } else {
            console.log('Por favor, digite valores numéricos válidos e diferentes.');
        }
    }
}

function ordenaValores(valores) {
    return valores.sort((a, b) => a - b);
}

const valores = solicitaValores();
console.log(`Os valores ordenados são: ${ordenaValores(valores).join(' e ')}`);