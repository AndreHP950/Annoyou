let $inputEmail = $('#Email');
let $inputSenha = $('#Senha');
let $botaoEnviar = $('#enviar-login');
let paragrafoEl = document.createElement('p');
let $caixaLogin = $('#caixa');
let logado = false;

$botaoEnviar.click(() => {
    let senhaStorage = localStorage.getItem('senha');
    let emailStorage = localStorage.getItem('email');

    if ($inputEmail.val() === emailStorage && $inputSenha.val() === senhaStorage) {
        window.location.href = 'index.html';
        logado = true;
        localStorage.setItem('logado', `${logado}`);
    } else {
        paragrafoEl.innerHTML = 'Email ou senha incorretos';
        $caixaLogin.append(paragrafoEl);
    }
});