const PlayerEnum = {
  NULL: 0,
  HUMAN: 1,
  COMPUTER: 2
};

class GameController{
  constructor(){
    //[1,2,3],[4,8,12],[16,32,48],
    //[64,128,192],[256,512,768], etc.
    //value = 2^(2*location)+(1+player.type)
    this.winningIDs = [];
    //horizontal human wins
    this.winningIDs.push(PlayerEnum.HUMAN*(Math.pow(2,0)+Math.pow(2,2)+Math.pow(2,4))); // 42
    this.winningIDs.push(PlayerEnum.HUMAN*(Math.pow(2,6)+Math.pow(2,8)+Math.pow(2,10))); // 2688
    this.winningIDs.push(PlayerEnum.HUMAN*(Math.pow(2,12)+Math.pow(2,14)+Math.pow(2,16))); // 172032
    //horizontal computer wins
    this.winningIDs.push(PlayerEnum.COMPUTER*(Math.pow(2,0)+Math.pow(2,2)+Math.pow(2,4))); // 63
    this.winningIDs.push(PlayerEnum.COMPUTER*(Math.pow(2,6)+Math.pow(2,8)+Math.pow(2,10))); // 3843
    this.winningIDs.push(PlayerEnum.COMPUTER*(Math.pow(2,12)+Math.pow(2,14)+Math.pow(2,16))); //2 45763
    //vertical human wins
    this.winningIDs.push(PlayerEnum.HUMAN*(Math.pow(2,0)+Math.pow(2,6)+Math.pow(2,12))); // 8322
    this.winningIDs.push(PlayerEnum.HUMAN*(Math.pow(2,2)+Math.pow(2,8)+Math.pow(2,14))); // 33288
    this.winningIDs.push(PlayerEnum.HUMAN*(Math.pow(2,4)+Math.pow(2,10)+Math.pow(2,16)));// 133152
    //vertical computer wins
    this.winningIDs.push(PlayerEnum.COMPUTER*(Math.pow(2,0)+Math.pow(2,6)+Math.pow(2,12))); // 12483
    this.winningIDs.push(PlayerEnum.COMPUTER*(Math.pow(2,2)+Math.pow(2,8)+Math.pow(2,14))); // 49923
    this.winningIDs.push(PlayerEnum.COMPUTER*(Math.pow(2,4)+Math.pow(2,10)+Math.pow(2,16))); // 199683
    //diagonal human wins
    this.winningIDs.push(PlayerEnum.HUMAN*(Math.pow(2,0)+Math.pow(2,8)+Math.pow(2,16))); // 131586
    this.winningIDs.push(PlayerEnum.HUMAN*(Math.pow(2,4)+Math.pow(2,8)+Math.pow(2,12))); // 8736
    //diagonal computer wins
    this.winningIDs.push(PlayerEnum.COMPUTER*(Math.pow(2,0)+Math.pow(2,8)+Math.pow(2,16))); // 197379
    this.winningIDs.push(PlayerEnum.COMPUTER*(Math.pow(2,4)+Math.pow(2,8)+Math.pow(2,12))); // 13104
  }
  isWinner(board){
    let id = board.id;
    return this.winningIDs.includes(id);
  }
}

class Player{
  constructor(type){
    this.type = type
  }
}

class Board{
  constructor(positions = newGamePositions()){
    this.positions = positions;
  }
  newGamePositions(){
    var positions = [];
    for(let i = 0; i < 9; i++){
      positions.push(new Player(PlayerEnum.NULL));
    }
    return positions;
  }
  move(location, player){
    
    let type = this.positions[location].type;
    
    if(type == PlayerEnum.NULL){
      nextPositions = Array.from(this.positions);
      nextPositions[location] = player;
      return new Board(nextPositions);
    }
    else
      return false;
  }
  
  get id(){
    var id = 0;
    //[1,2,3],[4,8,12],[16,32,48],[64,128,192],[256,512,768], etc.
    positions.forEach(function(value, index, arr){
      id = id + Math.pow(2,index)*(1+value.type);
    });
    return id;
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
    
    winConditions.forEach(function(value, index, arr){
      arr[index] = Math.abs(value);
    });
    
    return winConditions.includes(3);
   }
}
