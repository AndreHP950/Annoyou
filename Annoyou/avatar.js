let nomeEl = document.querySelector('#nome');
let avatarNomeEL = document.querySelector('#avatar-nome');
let corEl = document.querySelector('#cor');
let cabeçaEl = document.querySelector('#avatar-cabeca');
let corpoEl = document.querySelector('#avatar-corpo');
let cabeloEl = document.querySelector('#cabelo');
let cabeloEle = document.querySelector('#avatar-cabelo');

let nomeDigitado = nomeEl.value;

cabeloEl.addEventListener('change', function(e) {
    cabeloEle.src = e.target.value;
});

corEl.addEventListener('change', function(e) {
    cabeçaEl.style.backgroundColor = e.target.value;
    corpoEl.style.backgroundColor = e.target.value;

});

nomeEl.addEventListener('change', function() {
    avatarNomeEL.innerHTML = nomeEl.value;
});