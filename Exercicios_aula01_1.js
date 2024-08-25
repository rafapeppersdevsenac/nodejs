/*Eaxercicio 03 */ 


/*
var prompt = require('prompt');

prompt.start();

// Solicitar o valor em metros
prompt.get(['metros'], function (err, result) {
    if (err) {
        console.error(err);
        return;
    }

    // Converter a entrada para número
    var metros = parseFloat(result.metros);

    // Verificar se a entrada é válida
    if (isNaN(metros) || metros < 0) {
        console.log("Por favor, insira um valor válido para metros.");
        return;
    }

    // Calcular as conversões
    var centimetros = metros * 100;
    var milimetros = metros * 1000;

    // Exibir os resultados
    console.log(`${metros} metros equivalem a ${centimetros} centímetros.`);
    console.log(`${metros} metros equivalem a ${milimetros} milímetros.`);
});

*/ 

/* Exercicio 04 */ 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function converterMoeda(valorBRL) {
    const taxaCambio = 5; // 1 USD = 5 BRL
    const valorUSD = valorBRL / taxaCambio;
    console.log(`R$${valorBRL.toFixed(2)} é equivalente a $${valorUSD.toFixed(2)} USD.`);
}

rl.question('Digite o valor em reais (BRL): ', (input) => {
    const valorBRL = parseFloat(input);
    converterMoeda(valorBRL);
    rl.close();
});

/* Exercicio 05 */ 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function converterHoras(horas) {
    const minutos = horas * 60;
    const segundos = horas * 3600;
    console.log(`${horas} horas é equivalente a ${minutos} minutos ou ${segundos} segundos.`);
}

rl.question('Digite o valor em horas: ', (input) => {
    const horas = parseFloat(input);
    converterHoras(horas);
    rl.close();
});


/* Exercicio 06 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ultimoDigito(numero) {
    const ultimo = numero % 10;
    console.log(`O último dígito de ${numero} é ${ultimo}.`);
}

rl.question('Digite um número inteiro: ', (input) => {
    const numero = parseInt(input, 10);
    ultimoDigito(numero);
    rl.close();
});


/* Exercicio 07 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function converterVelocidade(kmh) {
    const ms = kmh / 3.6;
    console.log(`${kmh} km/h é equivalente a ${ms.toFixed(2)} m/s.`);
}

rl.question('Digite a velocidade em km/h: ', (input) => {
    const kmh = parseFloat(input);
    converterVelocidade(kmh);
    rl.close();
});


/* Exercicio 08 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularJurosSimples(principal, taxaJuros, tempo) {
    const juros = principal * (taxaJuros / 100) * tempo;
    console.log(`Os juros simples sobre R$${principal} a uma taxa de ${taxaJuros}% por ${tempo} anos é de R$${juros.toFixed(2)}.`);
}

rl.question('Digite o valor principal (em reais): ', (inputPrincipal) => {
    const principal = parseFloat(inputPrincipal);
    rl.question('Digite a taxa de juros anual (em porcentagem): ', (inputTaxa) => {
        const taxaJuros = parseFloat(inputTaxa);
        rl.question('Digite o tempo em anos: ', (inputTempo) => {
            const tempo = parseFloat(inputTempo);
            calcularJurosSimples(principal, taxaJuros, tempo);
            rl.close();
        });
    });
});


/* Exercicio 09 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function converterDias(dias) {
    const horas = dias * 24;
    const minutos = horas * 60;
    const segundos = minutos * 60;
    console.log(`${dias} dias é equivalente a ${horas} horas, ${minutos} minutos ou ${segundos} segundos.`);
}

rl.question('Digite o valor em dias: ', (input) => {
    const dias = parseFloat(input);
    converterDias(dias);
    rl.close();
});

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
