class Player{
  constructor(type){
    //Business logic: allowable types are 1 = human, -1 = computer, 0 = null.
    this.type = type
  }
}

class Board{
  constructor(){
    this.board = []
    for(var i = 0; i < 9; i++){
      board.push(new Player(0));
    }
  }
  move(location, player){
    //Business logic: allowable locations are 0 through 8.
    let type = board[location].type;
    //Check if location contains a player of type 0--is it a valid location.
    //Returns true for a valid move, and false otherwise.
    if(type == 0){
      board[location] = player;
      return true;
    }
    else
      return false;
  }
  get isWinner(){
    let sumOfRow0 = board[0].type + board[1].type + board[2].type;
    let sumOfRow1 = board[3].type + board[4].type + board[5].type;
    let sumOfRow2 = board[6].type + board[7].type + board[8].type;
    let sumOfCol0 = board[0].type + board[3].type + board[6].type;
    let sumOfCol1 = board[1].type + board[4].type + board[7].type;
    let sumOfCol2 = board[2].type + board[5].type + board[8].type;
    let sumOfDiag0 = board[0].type + board[4].type + board[8].type;
    let sumOfDiag1 = board[2].type + board[4].type + board[6].type;
    
    let winConditions = [];
    winConditions.push(sumOfRow0);
    winConditions.push(sumOfRow1);
    winConditions.push(sumOfRow2);
    winConditions.push(sumOfCol0);
    winConditions.push(sumOfCol1);
    winConditions.push(sumOfCol2);
    winConditions.push(sumOfDiag0);
    winConditions.push(sumOfDiag1);
    
    return winConditions.includes(3);
   }
}
