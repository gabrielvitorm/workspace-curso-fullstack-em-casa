const calcularIdade = () => {
    const nascimento = new Date(document.getElementById("nascimento").value)
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) idade--
    document.getElementById("mensagem").innerText = `Idade: ${idade} anos`;
}