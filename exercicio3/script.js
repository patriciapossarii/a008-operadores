//# Exercício 3

//Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

//a) 5 é maior que 20 e também é menor que 2;
const operacao1 = 5 > 20 &&  5 < 2 
console.log(operacao1)
//Resposta: "false", pois 5 é menor do 20

//b) 5 é igual a 5 ou é igual a “5”;
const operacao2 = 5 === 5 || 5 === "5"
console.log(operacao2)
//Resposta: "true", independendo que 5 === "5"

//c) negação de (vinte é maior que cinquenta)
const operacao3 = !(20 > 50)
console.log(operacao3)
//Resposta: "true", pois 
//              vinte é maior que cinquenta = False
// A condição é falsa, com a negação passa a ser "true"


//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
//Exemplo:
const operacao4 = !(20 > 50 || 50 > 60)
console.log(operacao4)
//Resposta: "true", pois 
//               vinte é maior que cinquenta = False
//               OU 
//               cinquenta é maior que sessenta = False
// As duas condições são falsas, com a negação passa a ser "true"

//```jsx
//const operacao1 = 20 < 50 && 50 > 90;
//console.log(operacao1);
//false, porque 50 não é maior que 90, consequentemente temos true && false,
//que devolve false
//```
