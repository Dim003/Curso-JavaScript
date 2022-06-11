function main (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    function eventForm (event) {
        event.preventDefault()
        let imc;
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');

        peso = Number(peso.value);
        altura = Number(altura.value);
        
        if(!peso){
            resultado.innerHTML = `Peso inválido!`;
        }else if(!altura){
            resultado.innerHTML = `Altura inválida`;
        }else{
            imc = peso/Math.pow(altura, 2);
        }

        if(imc >= 39.9){
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} Obesidade Grau 3`;
        }else if(imc >= 34.9){
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} Obesidade Grau 2`;
        }else if(imc >= 29.9){
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} Obesidade Grau 1`;
        }else if(imc >= 24.9){
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} Sobrepeso`;
        }else if(imc >= 18.5){
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} Peso Normal`;
        }else if(imc < 18.5){
            resultado.innerHTML = `IMC: ${imc.toFixed(2)} Abaixo do Peso`;
        }

    }
    form.addEventListener('submit', eventForm);
}

main();