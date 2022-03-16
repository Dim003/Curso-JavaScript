const nome = 'Fernando'
const sobrenome = 'Zocarato'
const idade = 19
const peso = 50
const altura = 1.74

let imc = peso / (altura * altura)
let anoNascimento = 2022 - 19

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', altura,
'de altura e seu IMC é de', imc)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)