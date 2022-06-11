let visorSenha = document.querySelector('.senha');
let btnSenha = document.querySelector('.btn-senha');


function criaSenha() {
    let caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]';
    let senha= '';
    for (let i = 0; i<=12;i++){
        let random = (Math.random() * caracteres.length);
        senha += caracteres.substring(random, random + 1);
    }

    return senha;
}

btnSenha.addEventListener('click',function(e){
    visorSenha.value = criaSenha();
});