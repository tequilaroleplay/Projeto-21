var canvas;

var block1,block2,block3,block4;

var ball, edges;

var music;

function preload(){

    // carregue o som aqui

    // Não Coloquei Som Porque Fica Estourado :)

}

function setup(){

    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = ("blue");

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = ("orange");

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = ("red");

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = ("green");

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = ("white");

    //escreva o código para adicionar velocityX e velocityY

    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    
    background(rgb("gray"));

    edges=createEdgeSprites();

    ball.bounceOff(edges);

    
    //escreva o código de ricochete de bola para bloco1 

    if(block1.isTouching(ball) && ball.bounceOff(block1)){

        ball.shapeColor = ("blue");

    }

if(block2.isTouching(ball)){

        ball.shapeColor = ("orange");

        //escreva o código para definir velocityX e velocityY da bola como 0

        ball.velocityX = 0;
        ball.velocityY = 0;

        //escreva o código para parar a música

        //tirei a musica :)

    }


    //escreva o código de ricochete de bola para bloco3

    if(block3.isTouching(ball) && ball.bounceOff(block3)){

        ball.shapeColor = ("red");

    }

    //escreva o código de ricochete de bola para bloco4

    if(block4.isTouching(ball) && ball.bounceOff(block4)){

        ball.shapeColor = ("green");
    }

    drawSprites();
}