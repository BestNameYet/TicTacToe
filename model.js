class Player{
  constructor(type){
    this.type = type;
    if(type == "human"){
      this.opponentType = "computer";
    }
    if(type == "computer"){
      this.opponentType = "human";
    }
    else
      this.opponentType = null;
  }
}

const board = (function(){
  var array = [];
  var player = new Player("blank");
  return array.fill(player);
})();

