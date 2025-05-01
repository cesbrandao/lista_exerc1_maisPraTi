/**
 * Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 * Fibonacci utilizando um loop for.
 */

let f0 =  0;
let f1 =  1;
for (let i = 0; i < 10; i++) {
    console.log(f0);
    let f2 = f0 + f1;
    f0 = f1;
    f1 = f2;
}