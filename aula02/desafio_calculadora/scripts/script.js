const calcular = (operador) =>{
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    let resultado = 0;

    if(isNaN(valor1)|| isNaN(valor2)){
        alert("Digite dois números válidos.");
        return;
    }

    switch(operador){
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if(valor2 === 0){
                alert("Não é possível fazer a divisão");
                return;
            }
            resultado = valor1/valor2;
            break;
    }

    document.getElementById("resultado").innerText = resultado.toFixed(2);
}