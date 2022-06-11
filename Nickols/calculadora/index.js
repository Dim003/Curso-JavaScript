let visor = document.getElementById('visor');

document.addEventListener('click', function(e){
    let el = e.target;
    let texto = el.innerText;
    if(el.classList.contains('number')) visor.value = visor.value + texto;
    if(el.classList.contains('clear')) visor.value = ' ';
    if(el.classList.contains('equal')) resultado(visor.value);
    if(el.classList.contains('action')) visor.value = visor.value + texto;

    console.log(visor.value);
});



resultado = (expressao) => {
    visor.value = eval(expressao); 
}

