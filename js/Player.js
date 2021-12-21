class Player {
  constructor(){
    
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      
    })
  }

  updateCount(count){
    database.ref('/').update({
      
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
     
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
     
    })
  }
}
