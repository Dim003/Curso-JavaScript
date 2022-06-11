// IIFE -> imediately invoked function expression
(function(idade, peso, altura){
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
    
})(30, 80, 1.80);

const nome = 'qualquer coisa';
console.log(nome);


