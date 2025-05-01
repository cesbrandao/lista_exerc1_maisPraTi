/**
 * Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
 * formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
 * Isósceles, escaleno ou eqüilátero.
 * 
 * Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
 * Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
 * Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
 * Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
 */

const prompt = require('prompt-sync')();

function solicitaLadosTriangulo() {
    let lados = [];
    for (let i = 0; i < 3; i++) {
        let lado;
        while (true) {
            lado = prompt(`Digite o comprimento do lado ${i + 1} do triângulo: `);
            if (!isNaN(lado) && Number(lado) > 0) {
                lados.push(Number(lado));
                break;
            } else {
                console.log('Por favor, digite um comprimento válido.');
            }
        }
    }
    return lados;
}

function classificaTriangulo(lados) {
    // Ordena os lados em ordem crescente
    const [lado1, lado2, lado3] = lados.sort((a, b) => a - b);
    if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
        if (lado1 === lado2 && lado2 === lado3) {
            console.log('Triângulo equilátero.');
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            console.log('Triângulo isósceles.');
        } else {
            console.log('Triângulo escaleno.');
        }
    } else {
        console.log('Os lados informados não formam um triângulo.');
    }
}

const lados = solicitaLadosTriangulo();
classificaTriangulo(lados);