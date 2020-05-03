class Game{
    constructor(){

    }
    getState(){
        var gameStateref= database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player= new Player();
            var playerCountref=await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val();
            player.getCount();}
            form= new Form();
            form.display();
        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
       // text("game start",120,100);
Player.getPlayerInfo();
if(allPlayers !== undefined){
   // var displayPosition=130;
    for(var plr in allPlayers){
        if(plr==="player"+player.index){
            fill("red");
        }
        else{
            fill(0);
        }
    
    //displayPosition+=20;
    //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition);
}
    
}
    if(keyIsDown (UP_ARROW) && player.index !== null){
        player.distance+=50;
player.update();
    }
    }
}