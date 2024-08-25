// console.log ("Teste")

// Exercicio 1

/*
var prompt = require('prompt');

prompt.start();

// Solicitar as notas
prompt.get(['Digite a nota 1', 'Digite a nota 2', 'Digite a nota 3'], function (err, result) {
    if (err) {
        console.error(err);
        return;
    }

    // Converter as entradas para números
    var nota1 = parseFloat(result.nota1);
    var nota2 = parseFloat(result.nota2);
    var nota3 = parseFloat(result.nota3);

    // Função para calcular a média
    function exerc1(num1, num2, num3) {
        var result = (num1 + num2 + num3) / 3;
        return result;
    }

    var result1 = exerc1(nota1, nota2, nota3);

    console.log("A sua média final foi: " + result1.toFixed(2));
});

*/

//EXERCICIO 2 
/*
var prompt = require('prompt');

prompt.start();

// Solicitar os dados
prompt.get(['Digite o peso em KG', 'Digite altura em metros'], function (err, result) {
    if (err) {
        console.error(err);
        return;
    }

    // Converter as entradas para números
    var peso1 = parseFloat(result.peso1);
    var altura1 = parseFloat(result.altura1);
    
    // Função para calcular a média
    function exerc1(pesokg, alturametro) {
        var IMC1 = pesokg / (alturametro * alturametro) ;
        return IMC1;
    }

    var IMC1 = exerc1(peso1, altura1);

    console.log("O seu IMC foi : " + IMC1.toFixed(2));
});

*/
var prompt = require('prompt');

prompt.start();

// Solicitar os dados
prompt.get(['peso', 'altura'], function (err, result) {
    if (err) {
        console.error(err);
        return;
    }

    // Converter as entradas para números
    var peso1 = parseFloat(result.peso);
    var altura1 = parseFloat(result.altura);
    
    // Função para calcular o IMC
    function calcularIMC(peso, altura) {
        var IMC = peso / (altura * altura);
        return IMC;
    }

    var IMC1 = calcularIMC(peso1, altura1);

    console.log("O seu IMC foi: " + IMC1.toFixed(2));

    /*
if (IMC1 >= 100 ) {
   console.log("Você esta muito acima do peso.");
}
*/

/*
  // Verificar e exibir o status do IMC
  if (IMC1 < 18.5) {
    console.log("Você está abaixo do peso.");
} else if (IMC1 >= 18.5 && IMC1 < 24.9) {
    console.log("Você está com peso normal.");
} else if (IMC1 >= 25 && IMC1 < 29.9) {
    console.log("Você está com sobrepeso.");
} else if (IMC1 >= 30 && IMC1 < 34.9) {
    console.log("Você está com obesidade grau 1.");
} else if (IMC1 >= 35 && IMC1 < 39.9) {
    console.log("Você está com obesidade grau 2.");
} else if (IMC1 >= 40) {
    console.log("Você está com obesidade grau 3 (obesidade mórbida).");
}
});

*/


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
