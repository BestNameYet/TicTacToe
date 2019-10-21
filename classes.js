const PlayerEnum = {
  NULL: 0,
  HUMAN: 1,
  COMPUTER: 2
};

const winners = [
  //Base 3 represenations (Javascript is big-endian--left most character has highest value.)
  000000111, 000111000, 111000000,
  000000222, 000222000, 222000000,
  001001001, 010010010, 100100100,
  002002002, 020020020, 200200200,
  001010100, 100010001
  002020200, 200020002
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
