//Função que confere se as senhas digitadas são iguais.
function confereSenha() {
    const senha = document.querySelector('input[name=senha]');
    const confirma = document.querySelector('input[name=confirma]');

    if (confirma.value === senha.value) {
        confirma.setCustomValidity('');        
    } else {
        confirma.setCustomValidity('As senhas não conferem');

    }
}

//Função que gera um alerta se todos os campos foram preenchidos corretamente.
function senhaOK() {
    alert("Nova senha cadastrada com sucesso!!!");
}
