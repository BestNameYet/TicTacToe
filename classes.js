const PlayerEnum = {
  NULL: 0,
  HUMAN: 1,
  COMPUTER: 2
};

const MIN_STATE = Math.pow(3, 11);


const winners = [
  //Base 3 represenations (Javascript is big-endian--left most character has highest value.)
  "10000000111", "10000111000", "10111000000",
  "10000000222", "10000222000", "10222000000",
  "10001001001", "10010010010", "10100100100",
  "10002002002", "10020020020", "10200200200",
  "10001010100", "10100010001"
  "10002020200", "10200020002"
];

class GameController{
  var currentPlayer;
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
    function zeroOpponent(position, index){
      if(index < 1) return "1";
      return position != playerType ? "0" : playerType;
    }
    function excludeOpponent(position){
      return playerType == "2" ? !position.substring(1).includes("1") : !position.includes("2");
    }
    var base3State = board.state.toString(3);
    base3State = Array.from(base3State).map(zeroOpponent);;
    for(let i = 1; i<base3State.length; i++){
      if(base3State[i] != currentPlayer.type.toString()){
        base3State[i] = "0";
      }
    }
    base3State = base3State.join("");
    let base10State = parseInt(base3State, 3);
    const decimalArray = winners.map(x => parseInt(x,3)-base10State);
    return decimalArray.includes(0);
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
  constructor(state = MIN_STATE){
    this.state = state;
  }
  move(position, player){
    let base3view = Number(state).toString(3);
    if(base3view.charAt(position).valueOf() == "0".valueOf())){
      let change = Math.pow(3,position)*(player.type);
      let newState = this.state + change;
      return new Board(newState);
    }
    else
      return false;
  }
}
