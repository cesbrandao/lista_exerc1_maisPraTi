/**
 * Implemente um programa que recebe uma nota de 0 a 10 e classifica como
 * "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
 */

const prompt = require('prompt-sync')();

function solicitaNota() {
    let nota;
    while (true) {
        nota = prompt('Digite a nota do aluno (0 a 10): ');
        if (!isNaN(nota) && Number(nota) >= 0 && Number(nota) <= 10) {
            return Number(nota);
        } else {
            console.log('Por favor, digite uma nota válida.');
        }
    }
}

function classificaNota(nota) {
    if (nota >= 7) {
        console.log('Aprovado!');
    } else if (nota >= 4) {
        console.log('Recuperação!');
    } else {
        console.log('Reprovado!');
    }
}

const nota = solicitaNota();
classificaNota(nota);