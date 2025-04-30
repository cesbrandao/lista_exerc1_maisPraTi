/**
 * Crie um programa que classifica a idade de uma pessoa em categorias (criança,
 * adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
 * controle if-else.
 */

const prompt = require('prompt-sync')();

function solicitaIdade() {
    let idade;
    while (true) {
        idade = prompt('Digite sua idade: ');
        if (!isNaN(idade) && Number.isInteger(Number(idade)) && Number(idade) >= 0) {
            return Number(idade);
        } else {
            console.log('Por favor, digite uma idade válida.');
        }
    }
}

function classificaIdade(idade) {
    if (idade <= 12) {
        console.log('Criança.');
    } else if (idade <= 17) {
        console.log('Adolescente.');
    } else if (idade <= 59) {
        console.log('Adulto.');
    } else {
        console.log('Idoso.');
    }
}

const idade = solicitaIdade();
classificaIdade(idade);