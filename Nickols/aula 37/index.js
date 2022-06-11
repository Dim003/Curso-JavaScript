const nomes = ['Luiz Otávio', 'Otavio', 'Henrique'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome [i]);
// }

// for (let i in nome) {
//     console.log(nome [i]);
// } 

for (let valor of nomes) {
    console.log(valor);
}
console.log('##############');

nomes.forEach(function(valor, indice, array){
    console.log(valor,indice,array);
});