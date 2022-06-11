// Factory Function (funcão fabrica)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
            console.log(valor);
        },
        fala: function(assunto = 'esta falando sobre NADA.'){
            return `${this.nome} esta ${assunto}.`;
        },
        altura: a,
        peso: p,
        // Getter (transforma uma funcao em atributo)
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);
console.log(p1.imc);
console.log(p1.fala());

