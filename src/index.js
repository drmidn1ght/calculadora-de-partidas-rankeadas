
// Utilizando readline para receber inputs do usuário 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Calculadora de Partidas Rankeadas");

function calcularSaldoDePartidas(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função com lógica para determinar o nível do herói
function definirNivelDoHeroi(saldo) {
    let nivel;
    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário";
    } else if (saldo >= 101) {
        nivel = "Imortal";
    }
    return nivel;
}

function informarRank(heroi, saldo, nivel) {
    console.log("O Herói " + heroi + " tem um saldo de " + saldo + " e está no nível de " + nivel + "!");
}

// Função para perguntar nome, vitórias e derrotas do herói
function perguntarHeroi() {
    rl.question("Qual é o nome do herói? ", (heroi) => {
        console.log("Saudações, nobre " + heroi + ". É chegada a hora de medir o seu poder de luta!");

        // Pergunta ao usuário o número de vitórias e converte o input para número inteiro
        rl.question("Quantas vezes você venceu suas batalhas? ", (vitorias) => {
            vitorias = parseInt(vitorias);

            // Pergunta ao usuário o número de derrotas e converte o input para número inteiro
            rl.question("E quantas vezes você amargou uma derrota? ", (derrotas) => {
                derrotas = parseInt(derrotas);

                // Atribuindo valores retornados das funções às constantes
                const saldo = calcularSaldoDePartidas(vitorias, derrotas);
                const nivel = definirNivelDoHeroi(saldo);
                informarRank(heroi, saldo, nivel);

                // Pergunta ao usuário se deseja continuar o programa
                rl.question("Deseja calcular outro herói? (sim/não) ", (resposta) => {
                    if (resposta.toLowerCase() === 'sim') {
                        perguntarHeroi(); // Chama a função novamente para outro herói
                    } else {
                        console.log("Até mais, marreta de matar demônio!");
                        rl.close(); // Encerra o readline
                    }
                });
            });
        });
    });
}

// Função principal que inicia a primeira chamada
function main() {
    perguntarHeroi();
}

main();
