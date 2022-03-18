function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criaPessoa('Fernando', 'Zocarato', 19)
const pessoa2 = criaPessoa('Luiz', 'Ricardo', 28)
const pessoa3 = criaPessoa('Caique', 'Fernandes', 39)

console.log(pessoa1)