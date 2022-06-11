const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);

// const removidos = nomes.splice(4, 1);
// const removidos = nomes.splice(3,2,'Luiz');

//pop
// const removidos = nomes.splice(-1, 1);

//shift
//const removidos = nomes.splice(0, 1);

//push
// nomes.splice(nomes.length, 0, 'Luiz');

//unshift
nomes.splice(0, 0, 'Luiz', 'Otavio');
console.log(nomes);