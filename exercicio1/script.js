//# Exercício 1

//Construa um programa que:

//a) Peça ao usuário que insira um número **par**
let numeroPar = Number (prompt ("Insire um número par"))

//b) Imprima no console **o resto da divisão** desse número por 2.
let divisaoNumeroPar = numeroPar % 2
console.log (` O resto da  divisão do número ${numeroPar} pelo número 2 é:  ${divisaoNumeroPar}`)

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//Resposta: O resultado sempre será 0, pois números pares não tem resto de divisão


//d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código
//Resposta: O resultado sempre será 1. Isto ocorre por ser o resto da divisão ocorrido em números impares

//>💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número