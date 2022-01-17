let inputEmailEl = document.querySelector('#Email');
let inputSenhaEl = document.querySelector('#Senha');
let botaoEnviarEl = document.querySelector('#enviar-cadastro');
let logado = false;

botaoEnviarEl.addEventListener('click', function(e) {
    localStorage.setItem('email', inputEmailEl.value);
    localStorage.setItem('senha', inputSenhaEl.value);

    if (inputEmailEl.value != '' && inputSenhaEl != '') {
        window.location.href = "login.html";
        logado = true;
    } else
        inputEmailEl.focus();
});