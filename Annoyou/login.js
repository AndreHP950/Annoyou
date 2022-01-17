let inputEmailEl = document.querySelector('#Email');
let inputSenhaEl = document.querySelector('#Senha');
let botaoEnviarEl = document.querySelector('#enviar-login');
let paragrafoEl = document.createElement('p');
let caixaLogin = document.querySelector('#caixa');

botaoEnviarEl.addEventListener('click', () => {
    let senhaStorage = localStorage.getItem('senha');
    let emailStorage = localStorage.getItem('email');

    paragrafoEl.innerHTML = '';

    if (inputEmailEl.value === emailStorage && inputSenhaEl.value === senhaStorage)
        window.location.href = "index.html";
    else {
        paragrafoEl.innerHTML = 'Email ou senha incorretos';
        caixaLogin.appendChild(paragrafoEl);
    }
});