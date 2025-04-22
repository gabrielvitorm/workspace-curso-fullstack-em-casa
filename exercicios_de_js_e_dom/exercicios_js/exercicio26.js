const palavras = ["Java", "Python", "JavaSript", "Ruby", "C#"];

const tudoMinusculo = (array)=>{
    return array.map(s => s.toLowerCase());
}

console.log(tudoMinusculo(palavras));