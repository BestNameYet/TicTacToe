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
  
  getWinner(board){
    var blank = new Player("blank");
    var clearedBoard = board.map(x => {
      if(x.type == this.opponentType){
        return blank;
      }
    });
    var booleanBoard = clearedBoard.mapx => {
      if(x.type == "blank"){
        return false;
      }
      else true;
    });
    for(i = 0; i<9; i=i+3){
      if(booleanBoard[i] && booleanBoard[i+1] && booleanBoard[i+2]){
        return true;
      }
     for(i = 0; i<3; i++){
      if(booleanBoard[i] && booleanBoard[i+3] && booleanBoard[i+6]){
        return true;
     }
      if(booleanBoard[9] && booleanBoard[4] && booleanBoard[0]){
        return true;
     }
       if(booleanBoard[6] && booleanBoard[4] && booleanBoard[2]){
        return true;
     }
    }
    
  }
  
}

const board = (function(){
  var array = [];
  var player = new Player("blank");
  return array.fill(player);
})();

function minimax(board, player){
}

