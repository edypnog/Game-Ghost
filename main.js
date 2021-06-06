var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'easy') {
     // time = 1500 
     createTime = 1500
} else if (nivel === 'hard') {
     // 1000
     createTime = 1000
} else if (nivel === 'hardest') {
     // 750
     createTime = 750
}

function tamanhoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth


    console.log(altura, largura);
};

tamanhoJogo();

var cronometro = setInterval(function() {
    tempo -= 1;

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaItem)
        window.location.href = 'win.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo //dentro das tags = inner
    }

}, 1000);

function randomPosition() {

    // remove previous element
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        if (vidas > 3) {
          window.location.href = 'game_over.html'
        } else {
            document.getElementById('v' + vidas).src = "../arquivo_da_aula/imagens/coracao_vazio.png"
            vidas++
        };
    };

    // random position
    var posX = Math.floor(Math.random() * largura) - 90;
    var posY = Math.floor(Math.random() * altura) - 90;

    posX = posX < 0 ? 0 : posX;
    posY = posY < 0 ? 0 : posY;

    console.log(posY, posX);

    // create HTML element
    var mosquito = document.createElement('img');
    mosquito.src = 'img/ghost.png';
    mosquito.className = randomSize() + ' ' + randomSide();
    mosquito.style.left = posX + 'px';
    mosquito.style.top = posY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    }
    document.body.appendChild(mosquito);

    randomSize();
    randomSide();
}

function randomSize() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    };

    /**
     * USING IF 
     * 
     * if (classe === 0) {
         return 'mosquito1'
          } else if (classe === 1) {
         return 'mosquito2'
          } else {
         return 'mosquito3'
          }
     * 
     */

};

function randomSide() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'
    };

}