class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       
    })

  }

  update(state){
    database.ref('/').update({
      
    });
  }

  async start(){
    if(gameState === 0){
      
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Inicio del Juego", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;
      for(var plr in allPlayers){
        
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
     
    }
  }
}
