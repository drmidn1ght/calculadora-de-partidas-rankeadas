//Utilizando readline com stdin e stdout para captar inputs do usuário

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Calculadora de Partidas Rankeadas");

//Perguntando nome do herói ao usuário 
rl.question("Qual é o nome do herói? ", (heroi) => {
    console.log("Saudações, nobre " + heroi + ". É chegada a hora de medir o seu poder de luta!");

    //Recebendo input de vitórias e convertendo para número inteiro 
    rl.question("Quantas vezes você venceu suas batalhas? ", (vitorias) => {
        vitorias = parseInt(vitorias);

        //Recebendo input de derrotas e convertendo para número inteiro 
        rl.question("E quantas vezes você amargou uma derrota? ", (derrotas) => {
            derrotas = parseInt(derrotas);

            function calcularSaldoDePartidas(vitorias, derrotas) {
                return vitorias - derrotas;
            }

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

            const saldo = calcularSaldoDePartidas(vitorias, derrotas);
            const nivel = definirNivelDoHeroi(saldo);
            informarRank(heroi, saldo, nivel);

            //Fechando readline
            rl.close();
        });
    });
});
