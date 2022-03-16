let numero = prompt('Digite um número:')
numero = Number(numero)
const numeroTitulo = document.getElementById('numero-titulo')
const Texto = document.getElementById('Texto')

numeroTitulo.innerHTML = numero
texto.innerHTML += `<p>Raiz quadrada:${numero **0.5}</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>é NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arrendondando para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arrendondando para baixo: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais : ${numero.toFixed(2)}</p>`
