const numeros = Array.from({length: 100 }, (_, index) => index + 1);

const numerosVerificados = numeros.map(numero =>{
    if (numero % 3 == 0 && numero % 5 == 0){
        return `FizzBuzz - ${numero}`;
    }else if(numero % 3 == 0){
        return `Fizz - ${numero}`;
    }else if(numero % 5 == 0){
        return `Buzz - ${numero}`;
    }
})

console.log(numerosVerificados);