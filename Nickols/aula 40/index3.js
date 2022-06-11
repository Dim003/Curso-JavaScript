numeroDiv = (i) => {
    if (i%3==0){
        return 'fizz';
    }else if(i%5==0){
        return 'buzz';
    }else if(i%5==0 && i%3==0){
        return 'fizzBuzz';
    }else{
        return i;
    }

}

for(let i = 0; i<=100; i++){
    console.log(i, numeroDiv(i));
}