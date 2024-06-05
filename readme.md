# DIO - Calculadora de Partidas Rankeadas 🕹️ 

Seja bem-vindo (a) ao repositório do projeto "Calculadora de Partidas Rankeadas". Este é um desafio de projeto da Digital Innovation One, parte do Santander Bootcamp 2024. Esta documentação traz informações sobre o contexto do projeto, requisitos, construção do projeto, referências, etc. 

## Contexto e objetivos 🎯 

Foi proposto o desenvolvimento de uma calculadora de partidas rankeadas em JavaScript, com uma função que recebesse como parâmetro a quantidade de vitórias e derrotas de um jogador, e que em seguida retornasse o resultado numa variável, onde o saldo de vitórias é calculado como ** (vitórias - derrotas) **. 

## Requisitos do projeto 📋 

O projeto deve conter variáveis, operadores, laços de repetição, estruturas de decisão e funções.

A estrutura de decisão deve ter os seguintes retornos:

- Se o saldo de vitórias for menor do que 10, então, o nível atribuído será "Ferro";
- Se o saldo estiver entre 11 e 20, o nível deverá ser "Bronze";
- Se o saldo estiver entre 21 e 50, o nível será "Prata";
- Se o saldo estiver entre 51 e 80, o nível será "Ouro";
- Se o saldo estiver entre 81 e 90, o nível será "Diamante";
- Se o saldo estiver entre 91 e 100, o nível será "Lendário";
- Se o saldo for maior ou igual a 100, o nível retornado deverá ser "Imortal".

Ao final, o algoritmo deverá retornar a mensagem ** "O Herói tem de saldo (saldo de vitórias) e está no nível (nível retornado)" **. 

## Construção do projeto 🛠️ 

O projeto foi desenvolvido em JavaScript utilizando VisualStudio Code para codificação, Node.JS para executar o programa e Git Bash para versionamento de código. 

O projeto está estruturado na seguinte forma:

- Arquivos `license.md` e `readme.md` na raiz do projeto, contendo, respectivamente, a licença do projeto e o arquivo de documentação;
- Pasta `src` contendo o código fonte do projeto no arquivo `index.js`. 

## Explicando a lógica do projeto 🧠 

Como o projeto não foi desenvolvido para ser executado em ambientes web, o módulo ** Readline ** foi empregado para criar a interface de recebimento de inputs e retorno de outputs (leia a seção Referências).

Ao executar o arquivo `index.js`, o usuário recebe uma mensagem informando o título do programa ("Calculadora de Partidas Rankeadas"), e é orientado a fornecer a quantidade de vitórias e derrotas.

No algoritmo, foi criada uma função para calcular o saldo de vitórias, a qual recebe como parâmetros as quantidades de vitórias e derrotas, e retorna o resultado da subtração de vitórias e derrotas.

Em seguida, outra função foi criada para estabelecer a lógica de decisão para informar o nível do herói conforme o saldo de partidas, aplicando a estrutura `if else/else if` para tal. A função tem como parâmetro o saldo retornado e, dentro de seu escopo, possui a variável "nivel" que armazena a string contendo o nível determinado. Por fim, esta função retorna a variável "nivel".

A terceira função recebe como parâmetros as constantes e variáveis `heroi`, `saldo` e `nivel`, e tem como funcionalidade exibir ao usuário uma mensagem informando o nome, saldo de partidas e nível do herói, concatenando strings e valores das variáveis e constantes.

Uma nova tomada de decisão é criada com outra função que pergunta ao usuário se deseja calcular o rank de outro herói. Caso a resposta seja "sim", o programa retorna ao ponto inicial e realiza as perguntas novamente, caso contrário, o algoritmo imprime uma mensagem indicando o encerramento do programa e assim o faz.

Finalmente, é criada a função principal do algoritmo que inicia a primeira chamada.

## Melhorias aplicadas 🚀 

O algoritmo foi pensado para melhorar a interação do usuário, tornando a experiência de executar um programa no terminal um pouco mais palatável com requisições e retornos mais próximos de um jogo real com foco em entretenimento.

Além disso, cada função criada no algoritmo possui atribuições específicas, evitando acúmulos desnecessários de funcionalidades, tornando o código ainda mais legível com nomes mais semânticos e objetivos. 

## Considerações finais 💭

Acredito ter melhorado minhas habilidades de resolução de problemas ao pesquisar documentações para aplicar o módulo readline, testando o programa em busca de falhas, além de testar o algoritmo com diferentes entradas e pensar em como implementar um laço de repetição sem criar um loop infinito. Foi desafiador, porém gratificante ver o resultado de meus esforços. Com certeza utilizarei este projeto como referência para aplicações futuras, e pretendo criar uma versão web deste projeto com HTML, CSS e JavaScript futuramente. 

## Referências 📚 

- [Readline Node.JS Documentation](https://nodejs.org/api/readline.html)
- [Node.JS Readline Module](https://www.w3schools.com/nodejs/ref_readline.asp) 

## Informações de contato 🗨️ 

            - [Meu perfil na DIO](https://www.dio.me/users/ana_drmidnight)
- [LinkedIn](https://www.linkedin.com/uxwriter95) 
- [E-mail](mailto:ana.drmidnight@gmail.com)
- Discord: dr.midn1ght
