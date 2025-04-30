# Lista de Exercícios - MaisPraTi

Este repositório contém uma coleção de 15 exercícios desenvolvidos em JavaScript como parte do curso **Formação Desenvolvedor Full Stack Júnior**. Cada exercício aborda um conceito ou problema específico e utiliza a biblioteca `prompt-sync` para entrada de dados no terminal.

Os exercícios estão organizados em arquivos separados (`exercicio01.js`, `exercicio02.js`, ..., `exercicio15.js`) para facilitar a execução e o entendimento de cada um.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
  - Verifique a versão instalada com o comando no terminal:
    ```bash
    node -v
    ```
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
  - Verifique a versão instalada com o comando no terminal:
    ```bash
    npm -v
    ```

## Como clonar o repositório

1. Clone este repositório em sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd lista_exerc1_maisPraTi
   ```

## Instalação das dependências

As dependências do projeto estão listadas no arquivo `package.json`. Para instalá-las, execute o seguinte comando no terminal:

```bash
npm install
```

Isso instalará automaticamente a biblioteca `prompt-sync` e outras dependências necessárias.

## Como executar os programas

Cada exercício está em um arquivo separado (`exercicio01.js`, `exercicio02.js`, ..., `exercicio15.js`). Para executar um exercício específico, use o seguinte comando no terminal, substituindo `exercicioXX.js` pelo nome do arquivo correspondente:

```bash
node exercicioXX.js
```

Por exemplo, para executar o exercício 1:

```bash
node exercicio01.js
```

## Estrutura do projeto

- `exercicio01.js`, `exercicio02.js`, `...`, `exercicio15.js`: Arquivos contendo os códigos dos exercícios.
- `package.json`: Lista de dependências e informações do projeto.
- `package-lock.json`: Detalhes das versões exatas das dependências instaladas.

## Observações

- Certifique-se de não alterar ou excluir o arquivo `package.json`, pois ele é essencial para a instalação das dependências.
- A pasta `node_modules/` não está incluída no repositório, mas será gerada automaticamente após a execução do comando `npm install`.