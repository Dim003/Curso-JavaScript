// IEEE 754-2008
let num1 = 10;

console.log(num1.toString());
console.log(num1.toString(2)) // transforma em numero binario
console.log(num1.toFixed(2)); // diminui o numero de casas decimais
console.log(Number.isInteger(num1)); // diz se é inteiro ou nao
console.group(Number.isNaN(num1)); // retorna se é numero ou nao

let num2 = 0.8
let num3 = 0.1

// torna a soma mais precisa e sem erros inesperados
// sem esta funcao a resposta seria 0.8999999....
console.log(parseFloat((num2+num3).toFixed(2)));    