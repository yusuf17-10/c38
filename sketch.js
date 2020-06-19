var datebase;
var canvas;
var allPlayers;
var form,player,game,playerCount;
var gameState=0;
var car1,car2,car3,car4,cars;


function setup(){
    database=firebase.database();
    canvas=createCanvas(displayWidth-20,displayHeight-30);

    game=new Game();
    game.getState();
    game.start();
    
}

function draw(){
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }

}
