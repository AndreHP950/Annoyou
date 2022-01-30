let $inputEmail = $('#Email');
let $inputSenha = $('#Senha');
let $inputNome = $('#Nome');
let $botaoEnviar = $('#enviar-cadastro');

$botaoEnviar.click(() => {
    localStorage.setItem('email', $inputEmail.val());
    localStorage.setItem('senha', $inputSenha.val());
    localStorage.setItem('nome', $inputNome.val());

    if ($inputEmail.val() != '' && $inputSenha != '' && $inputNome != '') 
        window.location.href = 'login.html';
    else
        $inputEmail.focus();
});