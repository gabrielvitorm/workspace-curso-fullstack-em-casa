const usuarioCerto = `admin`;
const senhaCerta = `1234`;

const verificarLogin = () => {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const verificacao = (usuario === usuarioCerto && senha === senhaCerta) ? `Usuário logado` : `Credenciais incorretas`;
    document.getElementById("resultado").innerText = verificacao;
}