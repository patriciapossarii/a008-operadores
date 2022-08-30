//# Exercício 2

//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

let primeiroNumero = Number (prompt ("Digite o primeiro número: "))
let segundoNumero = Number (prompt("Digite o segundo número: "))


//```
//O primeiro numero é maior que segundo? true
console.log (`${primeiroNumero > segundoNumero}`)

//O primeiro numero é igual ao segundo? false
console.log (`${primeiroNumero === segundoNumero}`)

//O primeiro numero é divisível pelo segundo? true
console.log (`${primeiroNumero % segundoNumero===0}`)


//O segundo numero é divisível pelo primeiro? true
console.log (`${segundoNumero % primeiroNumero===0}`)

//divisível = com resto zero

//Obs: O true ou false vai depender dos números inseridos e do resultado das operações.