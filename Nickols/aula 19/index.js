

const a = {
    nome: 'nickols',
    sobrenome: 'silva',
};
// o valor é copiado e sincronizado entre as duas variaveis
//const b = a;

//torna o b independente de a
const b = {...a};

a.nome = 'johnsen'
console.log(a.nome);