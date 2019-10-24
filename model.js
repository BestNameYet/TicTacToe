class TTTModel{
  
  xPlayer = new Player();
  oPlayer = new Player();
  board  = new Board();
  moveStack = [];
  moveCounter = 0;
  isPaused = true;
  isGameOver = false;
  hasWon = false;
  hasDraw = false;
    
  constructor(){
  }
  
  
  makeMove(positionNumber){
  }
  
  undoLastMove(){
  }
  
  resetMatch(){
  }
  
  unpauseMatch(){
  }
  
  pauseMatch(){
  }
    
  get positions(){
  }
  
  set position(position, type){
  }
  
  get moveCount(){
  }
  
  get isValidMove(positionNumber){
  }
  
  get moveMinimaxScore(positionNumber){
  }
  
  get hasGameOver(){
  }
  
  get hasWin(){
  }
  
  get hasDraw(){
  }
  
  get whoWinner(){
  }
  
  get whoLoser(){
  } 
  
  get whoPlayingType(){
  }
  
  get whoWaitingType(){
  }
  
  get whoPlayingName(){
  }
  
  get whoWaitingName(){
  }
  
  get xPlayerType(){
  }
  
  set xPlayerType(type){
  }
  
  get oPlayerType(){
  }
  
  set oPlayerType(type){
  }
  
  get xPlayerName(){
  }
  
  set xPlayerName(name){
  }
  
  get oPlayerName(){
  }
  
  set oPlayerName(name){
  }
}

class Player{
  type = null;
  name = null;
  mark = null;
  
  constructor(type, name, mark){
    this.type = type;
    this.name = name;
    this.mark = mark;
  }
  
  set type(type){
  
  }
  
  get type(type){
  
  }
  
  set name(name){
  }
  
  get name(){
  
  }
}

 class savePoint{
    board;
    playing;
    waiting;
    
    constructor(board, playing, waiting){
      this.board = board;
      this.playing = playing;
      this.waiting = waiting;
    }
 
 }

 class Board{
    positions = new Array(9);
    
    constructor(){
    }

    set position(position, player){
    }

    get positions(){
    }

    resetBoard(){
    }
  
  }



