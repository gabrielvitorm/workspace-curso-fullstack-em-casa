const gerarSenha = () => {
    const length = parseInt(document.getElementById("tamanho").value);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    let senha = "";
    for (let i = 0; i < length; i++) {
        senha += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("senha").innerText = `Senha: ${senha}`
}