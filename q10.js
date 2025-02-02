
//Codsigo ajsutado para funcionar com node a leitura de numeros
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
