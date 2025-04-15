const temperaturasCelsius = [23,24,30,28];
var temperaturaAleatoria = temperaturasCelsius[Math.floor(Math.random() * temperaturasCelsius.length)];

const converterTemperaturaFahrenheit = () =>{
    let temperaturaConvertidaF = ((temperaturaAleatoria*9)/5)+32;
    return temperaturaConvertidaF; 
}

console.log(`As temperaturas Armazenadas são: [${temperaturasCelsius[0]}°C, ${temperaturasCelsius[1]}°C, ${temperaturasCelsius[2]}°C, ${temperaturasCelsius[3]}°C]`);

console.log(`A temperatura sorteada foi: ${temperaturaAleatoria}°C, que corresponde a ${converterTemperaturaFahrenheit()}°F.`);