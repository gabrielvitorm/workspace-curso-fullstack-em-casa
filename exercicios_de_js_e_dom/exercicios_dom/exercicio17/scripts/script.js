const calcular = () => {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const op = document.getElementById("op").value;
    const resultado = document.getElementById("resultado");

    if(isNaN(num1) || (op !== "raiz" && isNaN(num2))){
        alert(`Digite 2 números válidos (ou apenas o primeiro para raiz`);
        return;
    }
    let res;
    switch(op){
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = num1 / num2;
            break;
        case '**':
            res = num1 ** num2;
            break;
        case 'raiz':
            res = Math.sqrt(num1);
            break;
        default:
            res = "Opção desconhecida";
    }

    resultado.innerText = `Resultado: ${res}`;
}