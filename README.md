# Desafio-1-Programa-Trilhas

Primeiro desafio do programa Trilhas INOVA 2B



```
//q1 
let nome = "José Ruan";
console.log(nome);

//q2  
let idade = 25;
let altura = 1.75;
console.log("idade de " + idade, "e altura de", altura);

//q3 
let preco = 50;
let desconto = 0.2;
let valorFinal = preco - (preco * desconto);
console.log("O valor final é de R$ " + valorFinal);

//q4
let temperatura = 30
if (temperatura > 25) {
    console.log("Está calor!")
}else{
    console.log("Está fresco!")
}

//q5
let idade = 17;
if (idade >= 18) {
    console.log("Você é maior de idade")

}else{
    console.log("Você é menor de idade")
}

//q6
let nota = 8; 
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

//q7
let numero1 = 10;
let numero2 = 10;

if (numero1 === numero2) {
    console.log("Os números são iguais");
} else {
    console.log("Os números são diferentes");
}

//q8
let nome = "José";
let idade = 23;

console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos");

//q9
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//q10
//Usuario com node para leitura de numeros
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarNumero() {
    rl.question('Digite um número (digite 5 para sair): ', (resposta) => {
        if (parseInt(resposta) === 5) {
            console.log("Você digitou 5. Fim do programa.");
            rl.close();  // Encerra o programa
        } else {
            perguntarNumero();  // Continua perguntando até digitar 5
        }
    });
}

perguntarNumero();

//q11
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

//q12
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

//q13

function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}

let raio = 5;
console.log("A área do círculo é: " + calcularAreaCirculo(raio).toFixed(2));


//q14
let numero1 = 10;
let numero2 = 20;

soma = numero1 + numero2;

console.log(`Resulado da soma entre ${numero1} e ${numero2} é ${soma}`);

//q15

//Função que soma dois numeros, recebe dois numeros(parametros) e retorna o resultado da soma
function soma(numero1, numero2) {
    //retorna a soma dos dois numeros
    return numero1 + numero2;
}
//Declaração da função soma 
console.log(soma(10, 20)); 


```
