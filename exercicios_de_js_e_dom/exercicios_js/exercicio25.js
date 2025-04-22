const palavras = ["Java", "Python", "JavaSript", "Ruby", "C#"];

const tudoMaisculo = (array)=>{
    return array.map(s => s.toUpperCase());
}

console.log(tudoMaisculo(palavras));