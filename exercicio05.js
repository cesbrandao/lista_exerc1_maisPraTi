/**
 * Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
 * determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
 * utilizando if-else.
 */

const prompt = require('prompt-sync')();

function solicitaPeso() {
    let peso;
    while (true) {
        peso = prompt('Digite seu peso (em kg): ');
        if (!isNaN(peso) && Number(peso) > 0) {
            return Number(peso);
        } else {
            console.log('Por favor, digite um peso válido.');
        }
    }
}

function solicitaAltura() {
    let altura;
    while (true) {
        altura = prompt('Digite sua altura (em metros): ');
        if (!isNaN(altura) && Number(altura) > 0) {
            return Number(altura);
        } else {
            console.log('Por favor, digite uma altura válida.');
        }
    }
}

function calculaIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log(`Seu IMC é ${imc.toFixed(2)}: Abaixo do peso.`);
    } else if (imc < 24.9) {
        console.log(`Seu IMC é ${imc.toFixed(2)}: Peso normal.`);
    } else if (imc < 29.9) {
        console.log(`Seu IMC é ${imc.toFixed(2)}: Sobrepeso.`);
    } else {
        console.log(`Seu IMC é ${imc.toFixed(2)}: Obesidade.`);
    }
}

const peso = solicitaPeso();
const altura = solicitaAltura();
calculaIMC(peso, altura);