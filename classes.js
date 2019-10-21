const PlayerEnum = {
  NULL: 0,
  HUMAN: 1,
  COMPUTER: 2
};

const winners = [
  PlayerEnum.HUMAN*(Math.pow(3,0)+Math.pow(3,1)+Math.pow(3,2)),
  PlayerEnum.HUMAN*(Math.pow(3,3)+Math.pow(3,4)+Math.pow(3,5)),
  PlayerEnum.HUMAN*(Math.pow(3,6)+Math.pow(3,7)+Math.pow(3,8)),
  PlayerEnum.COMPUTER*(Math.pow(3,0)+Math.pow(3,1)+Math.pow(3,2)),
  PlayerEnum.COMPUTER*(Math.pow(3,3)+Math.pow(3,4)+Math.pow(3,5)),
  PlayerEnum.COMPUTER*(Math.pow(3,6)+Math.pow(3,7)+Math.pow(3,8)),
  PlayerEnum.HUMAN*(Math.pow(3,0)+Math.pow(3,3)+Math.pow(3,6)),
  PlayerEnum.HUMAN*(Math.pow(3,1)+Math.pow(3,4)+Math.pow(3,7)),
  PlayerEnum.HUMAN*(Math.pow(3,2)+Math.pow(3,5)+Math.pow(3,8)),
  PlayerEnum.COMPUTER*(Math.pow(3,0)+Math.pow(3,3)+Math.pow(3,6)),
  PlayerEnum.COMPUTER*(Math.pow(3,1)+Math.pow(3,4)+Math.pow(3,7)),
  PlayerEnum.COMPUTER*(Math.pow(3,2)+Math.pow(3,5)+Math.pow(3,8)),
  PlayerEnum.HUMAN*(Math.pow(3,0)+Math.pow(3,4)+Math.pow(3,8)),
  PlayerEnum.HUMAN*(Math.pow(3,2)+Math.pow(3,4)+Math.pow(3,6)),
  PlayerEnum.COMPUTER*(Math.pow(3,0)+Math.pow(3,4)+Math.pow(3,8)),
  PlayerEnum.COMPUTER*(Math.pow(3,2)+Math.pow(3,4)+Math.pow(3,6))
];

class GameController{
  constructor(){
  }
  makeMove(position, player){
  }
  newGame(view){
  }
  displayBoard(board, view){
  }
  displayCurrentPlayer(player, view){
  }
  checkWinner(board){
    return winners.includes(board.state);
  }
  checkDraw(board){
  }
}

class Player{
  constructor(type){
    this.type = type
  }
}

class Board{
  constructor(state = 0){
    this.state = state;
  }
  move(position, player){
    let reps = 9-Number(id).toString(3).length;
    let base3view = "0".repeat(reps)+Number(state).toString(3);
    if(base3view.charAt(8-position).valueOf() == "0".valueOf())){
      let potentialMove = Math.pow(3,position)*(player.type);
      let newState = this.state + potentialMove;
      return new Board(newState);
    }
    else
      return false;
  }
}
