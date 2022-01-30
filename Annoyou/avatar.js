let nomeEl = $('#nome');
let avatarNomeEL = $('#avatar-nome');
let corEl = $('#cor');
let cabeçaEl = $('#avatar-cabeca');
let corpoEl = $('#avatar-corpo');
let cabeloEl = $('#cabelo');
let cabeloEle = $('#avatar-cabelo');

let nomeDigitado = nomeEl.val();
if (nomeEl.val() != '') {
    avatarNomeEL.html(`${nomeEl.val()}`);
}

let logado = localStorage.getItem('logado');

if (localStorage.getItem('cabeloAvatar') !== null && logado === 'true')
    cabeloEle.attr('src', localStorage.getItem('cabeloAvatar'));

if (localStorage.getItem('corAvatar') !== null && logado === 'true') {
    let cor = localStorage.getItem('corAvatar');

    cabeçaEl.css('background-color', cor);
    corpoEl.css('background-color', cor);
}

cabeloEl.change(function(e) {
    cabeloEle.attr('src', `${e.target.value}`);
    localStorage.setItem('cabeloAvatar', `${e.target.value}`);
});

corEl.change(function(e) {
    //cabeçaEl.style.backgroundColor = e.target.value;
    cabeçaEl.css('background-color', `${e.target.value}`);
    corpoEl.css('background-color', `${e.target.value}`);
    localStorage.setItem('corAvatar', `${e.target.value}`);
});

nomeEl.change(function() {
    avatarNomeEL.html(`${nomeEl.val()}`);
});