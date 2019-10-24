class TTTModel{
  
  xPlayer;
  oPlayer;
  board;
  moveStack;
  moveCounter;
  isPaused;
  isGameOver;
  hasWon;
  hasDraw;
    
  constructor(){
    this.xPlayer = new Player();
    this.oPlayer = new Player();
    this.board = new Board();
    this.moveStack = [];
    this.moveCounter = 0;
    this.isPaused = true;
    this.isGameOver = false;
    this.hasWin = false;
    this.hasDraw = false;
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
  name = "";
  mark = "";
  
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

  class Board{
    const positions;
    
    construct(type
  
  }



