const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

//[Background]
const bg = {
    sprtX: 390,
    sprtY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,

    desenha() {
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect (0,0, canvas.width, canvas.height);

        contexto.drawImage(
            sprites, 
            bg.sprtX, bg.sprtY, //Sprite X, Sprite Y
            bg.largura, bg.altura, //Largura, Altura (Sprite)
            bg.x, bg.y, //Posição do desenho no Canvas (X,Y)
            bg.largura, bg.altura //Tamanho do Sprite no Canvas
        );

        contexto.drawImage(
            sprites, 
            bg.sprtX, bg.sprtY, //Sprite X, Sprite Y
            bg.largura, bg.altura, //Largura, Altura (Sprite)
            (bg.x + bg.largura), bg.y, //Posição do desenho no Canvas (X,Y)
            bg.largura, bg.altura //Tamanho do Sprite no Canvas
        );    
    },
};

//[Floor]
const chao = {
    sprtX: 0,
    sprtY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,

    desenha() {
        contexto.drawImage(
            sprites, 
           chao.sprtX,chao.sprtY, //Sprite X, Sprite Y
           chao.largura,chao.altura, //Largura, Altura (Sprite)
           chao.x,chao.y, //Posição do desenho no Canvas (X,Y)
           chao.largura,chao.altura //Tamanho do Sprite no Canvas
        );
    
        contexto.drawImage(
            sprites, 
           chao.sprtX,chao.sprtY, //Sprite X, Sprite Y
           chao.largura,chao.altura, //Largura, Altura (Sprite)
           (chao.x + chao.largura),chao.y, //Posição do desenho no Canvas (X,Y)
           chao.largura,chao.altura //Tamanho do Sprite no Canvas
        );
    },
};

//[FlappyBird]
const flappyBird = {
    sprtX: 0,
    sprtY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    gravidade: 0.25,
    velocidade: 0,
    
    atualiza () {
        flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
        flappyBird.y = flappyBird.y + flappyBird.velocidade;
    },

    desenha() {
        contexto.drawImage(
            sprites, 
            flappyBird.sprtX, flappyBird.sprtY, //Sprite X, Sprite Y
            flappyBird.largura, flappyBird.altura, //Largura, Altura (Sprite)
            flappyBird.x, flappyBird.y, //Posição do desenho no Canvas (X,Y)
            flappyBird.largura, flappyBird.altura //Tamanho do Sprite no Canvas
        );
    },
};

function loop() {
    flappyBird.atualiza();

    bg.desenha();
    flappyBird.desenha();
    chao.desenha();

    requestAnimationFrame(loop);
}

loop();