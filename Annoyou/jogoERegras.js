let $botaoJogo = $('.noselect');
let $botaoSair = $('#sair');
const mainEl = document.querySelector('main');

/* parte de verificação do cadastro */

function verificaSeEstaLogadoEAdiciona() {
    let logado = localStorage.getItem('logado');
    let aHREFCadastroLogin = document.querySelector('#login-cadastro');
    let botaoComecarJogo = document.querySelector('#botao-comecar');
    if (logado === 'true') {
        let botaoNome = document.querySelector('#nome');
        botaoNome.value = localStorage.getItem('nome');
        aHREFCadastroLogin.innerHTML = '';
    } else {
        $botaoSair.html('');
        let h2GameEl = document.querySelector('#h2-game');
        h2GameEl.innerHTML = 'Faça login para jogar e salvar seu avatar!';

        botaoComecarJogo.style.display = 'none';
    }
}

function desloga() {
    localStorage.setItem('logado', 'false');
}

verificaSeEstaLogadoEAdiciona();

/* fases */

function startTimer(duration, display) {
    let timer = duration,
        minutes, seconds;

    let intervalo = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        let botaoEscolhidoFaseUm = document.querySelector('#botao-escolhido');
        if (botaoEscolhidoFaseUm !== null) {
            botaoEscolhidoFaseUm.addEventListener('click', () => {
                clearInterval(intervalo);
            });
        }

        if (--timer < 0) {
            window.location.href = 'index.html';
        }
    }, 1000);
}

function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 2;
    speechSynthesis.speak(utterance);
}

function numRandomParaBotao(min, max) {
    return Math.random() * (max - min) + min;
}

function criaTimerNaPagina() {
    let divTimerEl = document.createElement('div');
    divTimerEl.setAttribute('id', 'div-timer');
    let spanTimeEl = document.createElement('span');
    spanTimeEl.innerHTML = '00:00';
    spanTimeEl.setAttribute('id', 'time');
    divTimerEl.appendChild(spanTimeEl);

    mainEl.appendChild(divTimerEl);
}

$botaoJogo.click(faseUm);

function faseUm() {
    mainEl.innerHTML = '';

    criaTimerNaPagina();

    jQuery(function($) {
        let fiveMinutes = 10,
            display = $('#time');
        startTimer(fiveMinutes, display);
    });

    criaAvatar();

    navigator.vibrate(500); // faz o celular vibrar


    localStorage.setItem('fase', '1');

    let numAleatorio = numRandomParaBotao(0, 24); // num aleatorio para ser diferente independente da vez que o usuario jogue
    numAleatorio = Math.round(numAleatorio);

    let divParaTodosOsBotoesEl = document.createElement('div');
    divParaTodosOsBotoesEl.setAttribute('id', 'div-all-botoes');
    divParaTodosOsBotoesEl.classList.add('centralizado');

    for (let i = 0; i < 25; i++) {
        let botaoEl = document.createElement('button');
        botaoEl.classList.add('noselect');
        botaoEl.style.visibility = 'visible';

        let divButtons = document.createElement('div');

        divButtons.style.padding = '2em';
        divButtons.classList.add('centralizado');

        divParaTodosOsBotoesEl.appendChild(divButtons);

        divButtons.appendChild(botaoEl);

        if (i === numAleatorio) {
            botaoEl.setAttribute('id', 'botao-escolhido');
            botaoEl.addEventListener('click', function passaDaFaseUm() {
                speechSynthesis.cancel();
                faseDois();
            });
        } else {
            botaoEl.addEventListener('click', function botaoErrado() {
                playText('Botão errado');
                botaoEl.style.visibility = 'hidden';
            });
        }
    }

    mainEl.appendChild(divParaTodosOsBotoesEl);
}

function faseDois() {
    mainEl.innerHTML = '';

    criaTimerNaPagina();
    criaAvatar();

    jQuery(function($) {
        var fiveMinutes = 10,
            display = $('#time');
        startTimer(fiveMinutes, display);
    });

    let botaoEl = document.createElement('button');
    botaoEl.classList.add('noselect');
    botaoEl.setAttribute('id', 'botao-escolhido');
    botaoEl.addEventListener('click', function passaDaFaseDois() {
        faseTres();
    });

    let divParaBotao = document.createElement('div');
    divParaBotao.classList.add('centralizado');
    divParaBotao.classList.add('centralizar-top-bottom');

    let divRelativa = document.createElement('div');
    divRelativa.classList.add('relative');

    let img1 = document.createElement('img');
    img1.src = 'imgs/14062009.png';
    img1.classList.add('imgs_fase');
    img1.setAttribute('id', 'img1');

    let img2 = document.createElement('img');
    img2.src = 'imgs/17012018.png';
    img2.classList.add('imgs_fase');
    img2.setAttribute('id', 'img2');

    let img3 = document.createElement('img');
    img3.src = 'imgs/21022021.png';
    img3.classList.add('imgs_fase');
    img3.setAttribute('id', 'img3');

    let img4 = document.createElement('img');
    img4.src = 'imgs/22112020.png';
    img4.classList.add('imgs_fase');
    img4.setAttribute('id', 'img4');

    let img5 = document.createElement('img');
    img5.src = 'imgs/12082016.png';
    img5.classList.add('imgs_fase');
    img5.setAttribute('id', 'img5');

    let img6 = document.createElement('img');
    img6.src = 'imgs/15032017.png';
    img6.classList.add('imgs_fase');
    img6.setAttribute('id', 'img6');

    let img7 = document.createElement('img');
    img7.src = 'imgs/22122021.png';
    img7.classList.add('imgs_fase');
    img7.setAttribute('id', 'img7');

    let img8 = document.createElement('img');
    img8.src = 'imgs/23072022.png';
    img8.classList.add('imgs_fase');
    img8.setAttribute('id', 'img8');

    let img9 = document.createElement('img');
    img9.src = 'imgs/17082015.png';
    img9.classList.add('imgs_fase');
    img9.setAttribute('id', 'img9');

    let img10 = document.createElement('img');
    img10.src = 'imgs/1807005.png';
    img10.classList.add('imgs_fase');
    img10.setAttribute('id', 'img10');

    let img11 = document.createElement('img');
    img11.src = 'imgs/20102021.png';
    img11.classList.add('imgs_fase');
    img11.setAttribute('id', 'img11');

    /* API DRAGGABLE MEXER EM UMA IMAGEM NA PAGINA  */

    $(function() {
        $("#img1").draggable();
    });
    $(function() {
        $("#img2").draggable();
    });
    $(function() {
        $("#img3").draggable();
    });
    $(function() {
        $("#img4").draggable();
    });
    $(function() {
        $("#img5").draggable();
    });
    $(function() {
        $("#img6").draggable();
    });
    $(function() {
        $("#img7").draggable();
    });
    $(function() {
        $("#img8").draggable();
    });
    $(function() {
        $("#img9").draggable();
    });
    $(function() {
        $("#img10").draggable();
    });
    $(function() {
        $("#img11").draggable();
    });

    divRelativa.appendChild(img1);
    divRelativa.appendChild(img2);
    divRelativa.appendChild(img3);
    divRelativa.appendChild(img4);
    divRelativa.appendChild(img5);
    divRelativa.appendChild(img6);
    divRelativa.appendChild(img7);
    divRelativa.appendChild(img8);
    divRelativa.appendChild(img9);
    divRelativa.appendChild(img10);
    divRelativa.appendChild(img11);

    mainEl.appendChild(divRelativa);
    divParaBotao.appendChild(botaoEl);
    mainEl.appendChild(divParaBotao);
}

function criaAvatar() {
    let divRelativaDoAvatarEl = document.createElement('div');
    divRelativaDoAvatarEl.setAttribute('id', 'relativa-avatar');

    let asideEl = document.createElement('ASIDE');
    asideEl.setAttribute('id', 'aside-avatar');

    let divAvatarPrimeira = document.createElement('div');
    divAvatarPrimeira.setAttribute('id', 'avatar');

    let sectionAvatar = document.createElement('SECTION');
    sectionAvatar.setAttribute('id', 'secao-preview');

    let divAvatar = document.createElement('div');
    divAvatar.setAttribute('id', 'avatar-preview');

    let imgCabeca = document.createElement('img');
    imgCabeca.src = 'imgs/cabeca.png';
    imgCabeca.setAttribute('id', 'avatar-cabeca');
    imgCabeca.style.backgroundColor = localStorage.getItem('corAvatar');

    let imgCorpo = document.createElement('img');
    imgCorpo.src = 'imgs/corpo.png';
    imgCorpo.setAttribute('id', 'avatar-corpo');
    imgCorpo.style.backgroundColor = localStorage.getItem('corAvatar');

    let imgCamisa = document.createElement('img');
    imgCamisa.src = 'imgs/camisa-1.png';
    imgCamisa.setAttribute('id', 'avatar-camisa');

    let imgExpressao = document.createElement('img');
    imgExpressao.src = 'imgs/expressao-chatao.png';
    imgExpressao.setAttribute('id', 'avatar-expressao');

    let imgCabelo = document.createElement('img');
    imgCabelo.src = localStorage.getItem('cabeloAvatar');
    imgCabelo.setAttribute('id', 'avatar-cabelo');

    divAvatar.appendChild(imgCabeca);
    divAvatar.appendChild(imgCorpo);
    divAvatar.appendChild(imgCamisa);
    divAvatar.appendChild(imgExpressao);
    divAvatar.appendChild(imgCabelo);

    sectionAvatar.appendChild(divAvatar);

    divAvatarPrimeira.appendChild(sectionAvatar);

    asideEl.appendChild(divAvatarPrimeira);

    divRelativaDoAvatarEl.appendChild(asideEl);

    mainEl.appendChild(divRelativaDoAvatarEl);

    $(function() {
        $('aside').draggable();
    });
}

function faseTres() {
    const bodyEl = document.querySelector('body');
    const footerEl = document.querySelector('footer');

    bodyEl.removeChild(footerEl);
    mainEl.innerHTML = '';

    criaAvatar();
    criaTimerNaPagina();

    jQuery(function($) {
        var fiveMinutes = 20,
            display = $('#time');
        startTimer(fiveMinutes, display);
    });


    /* fase retirada de https://www.youtube.com/watch?v=2nucjefSr6I kaboom.js Ania Kubow*/

    kaboom({
            global: true,
            fullscreen: true,
            scale: 2,
            debug: true,
            clearColor: [0, 0, 0, 1],
        })
        // Speed identifiers
    const MOVE_SPEED = 120
    const JUMP_FORCE = 360
    const BIG_JUMP_FORCE = 550
    let CURRENT_JUMP_FORCE = JUMP_FORCE
    const FALL_DEATH = 400
    const ENEMY_SPEED = 20

    // Game logic

    let isJumping = true

    loadRoot('mario/')
    loadSprite('coin', 'coin.png')
    loadSprite('evil-shroom', 'evil-shroom.png')
    loadSprite('brick', 'brick.png')
    loadSprite('block', 'block.png')
    loadSprite('mario', 'mario.png')
    loadSprite('mushroom', 'mushroom.png')
    loadSprite('surprise', 'surprise.png')
    loadSprite('unboxed', 'unboxed.png')
    loadSprite('pipe-top-left', 'pipe-top-left.png')
    loadSprite('pipe-top-right', 'pipe-top-right.png')
    loadSprite('pipe-bottom-left', 'pipe-bottom-left.png')
    loadSprite('pipe-bottom-right', 'pipe-bottom-right.png')

    loadSprite('blue-block', 'blue-block.png')
    loadSprite('blue-brick', 'blue-brick.png')
    loadSprite('blue-steel', 'blue-steel.png')
    loadSprite('blue-evil-shroom', 'blue-evil-shroom.png')
    loadSprite('blue-surprise', 'blue-surprise.png')



    scene("game", ({ level, score }) => {
        layers(['bg', 'obj', 'ui'], 'obj')

        const maps = [
            [
                '                    **************    ',
                '                            zzzzzz    ',
                '              xxxxxxxxxxxxxxxxxxxxx   ',
                '                                      ',
                '                                      ',
                '     %   =*=%=                 =      ',
                '                              ==      ',
                '                             ===    -+',
                '                z ^ z ^  ^  ====    ()',
                '================================   ===',
            ],
        ]

        const levelCfg = {
            width: 20,
            height: 20,
            '=': [sprite('block'), solid()],
            '$': [sprite('coin'), 'coin'],
            '%': [sprite('surprise'), solid(), 'coin-surprise'],
            '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
            '}': [sprite('unboxed'), solid()],
            '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
            ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
            '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
            '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
            '^': [sprite('evil-shroom'), solid(), 'dangerous'],
            '#': [sprite('mushroom'), solid(), 'mushroom', body()],
            '!': [sprite('blue-block'), solid(), scale(0.5)],
            '£': [sprite('blue-brick'), solid(), scale(0.5)],
            'z': [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
            '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
            'x': [sprite('blue-steel'), solid(), scale(0.5)],

        }

        const gameLevel = addLevel(maps[level], levelCfg)

        const scoreLabel = add([
            text(score),
            pos(30, 6),
            layer('ui'),
            {
                value: score,
            }
        ])

        add([text('level ' + parseInt(level + 1)), pos(40, 6)])

        function big() {
            let timer = 0
            let isBig = false
            return {
                update() {
                    if (isBig) {
                        CURRENT_JUMP_FORCE = BIG_JUMP_FORCE
                        timer -= dt()
                        if (timer <= 0) {
                            this.smallify()
                        }
                    }
                },
                isBig() {
                    return isBig
                },
                smallify() {
                    this.scale = vec2(1)
                    CURRENT_JUMP_FORCE = JUMP_FORCE
                    timer = 0
                    isBig = false
                },
                biggify(time) {
                    this.scale = vec2(2)
                    timer = time
                    isBig = true
                }
            }
        }

        const player = add([
            sprite('mario'), solid(),
            pos(30, 0),
            body(),
            big(),
            origin('bot')
        ])

        action('mushroom', (m) => {
            m.move(20, 0)
        })

        player.on("headbump", (obj) => {
            if (obj.is('coin-surprise')) {
                gameLevel.spawn('$', obj.gridPos.sub(0, 1))
                destroy(obj)
                gameLevel.spawn('}', obj.gridPos.sub(0, 0))
            }
            if (obj.is('mushroom-surprise')) {
                gameLevel.spawn('#', obj.gridPos.sub(0, 1))
                destroy(obj)
                gameLevel.spawn('}', obj.gridPos.sub(0, 0))
            }
        })

        player.collides('mushroom', (m) => {
            destroy(m)
            player.biggify(6)
        })

        player.collides('coin', (c) => {
            destroy(c)
            scoreLabel.value++
                scoreLabel.text = scoreLabel.value
        })

        action('dangerous', (d) => {
            d.move(-ENEMY_SPEED, 0)
        })

        player.collides('dangerous', (d) => {
            if (isJumping) {
                destroy(d)
            } else {
                go('lose', { score: scoreLabel.value })
            }
        })

        player.action(() => {
            camPos(player.pos)
            if (player.pos.y >= FALL_DEATH) {
                go('lose', { score: scoreLabel.value })
            }
        })

        player.collides('pipe', () => {
            keyPress('down', () => {
                window.location.href = 'parabens.html';
            })
        })

        keyDown('left', () => {
            player.move(-MOVE_SPEED, 0)
        })

        keyDown('right', () => {
            player.move(MOVE_SPEED, 0)
        })

        player.action(() => {
            if (player.grounded()) {
                isJumping = false
            }
        })

        keyPress('up', () => {
            if (player.grounded()) {
                isJumping = true
                player.jump(CURRENT_JUMP_FORCE)
            }
        })
    })

    scene('lose', ({ score }) => {
        add([origin('center'), pos(width() / 2, height() / 2), text("Recarregue a pagina e tente novamente. Seu placar foi:", score, 320)])
    })
    start("game", { level: 0, score: 0 })

}