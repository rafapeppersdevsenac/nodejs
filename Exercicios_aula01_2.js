
/* Exercicio 10 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRetangulo(largura, comprimento) {
    const perimetro = 2 * (largura + comprimento);
    const area = largura * comprimento;
    console.log(`O perímetro do retângulo é ${perimetro} e a área é ${area}.`);
}

rl.question('Digite a largura do retângulo: ', (inputLargura) => {
    const largura = parseFloat(inputLargura);
    rl.question('Digite o comprimento do retângulo: ', (inputComprimento) => {
        const comprimento = parseFloat(inputComprimento);
        calcularRetangulo(largura, comprimento);
        rl.close();
    });
});
