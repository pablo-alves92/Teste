//Função que confere se as senhas digitadas são iguais.
function confereSenha() {
    const senha = document.querySelector('input[class=senha]');
    const confirma = document.querySelector('input[class=confirma]');

    if (confirma.value === senha.value) {
        confirma.setCustomValidity('');
    } else {
        confirma.setCustomValidity('As senhas não conferem');

    }
}

//Função que gera um alerta se todos os campos foram preenchidos corretamente.
function senhaOK() {
    alert("Novo usuário cadastrado com sucesso!")
}