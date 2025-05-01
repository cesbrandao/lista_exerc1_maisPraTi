/**
 * Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
 * Utilize switch-case para implementar a lógica de cada opção selecionada.
 */

const prompt = require('prompt-sync')();

while (true) {
    switch (prompt('Digite um número de 1 a 7: ')) {
        case '1':
            console.log('Domingo');
            return;
        case '2':
            console.log('Segunda-feira');
            return;
        case '3':
            console.log('Terça-feira');
            return;
        case '4':
            console.log('Quarta-feira');
            return;
        case '5':
            console.log('Quinta-feira');
            return;
        case '6':
            console.log('Sexta-feira');
            return;
        case '7':
            console.log('Sábado');
            return;
        default:
            console.log('Número inválido!');
    }
}
