class TTTModel{
  
  xPlayer = new Player();
  oPlayer = new Player();
  whoWaititng = null;
  whoPlaying = null;
  board  = new Board();
  moveStack = [];
  moveCount = 0;
  isPaused = true;
  isGameOver = false;
  hasWon = false;
  hasDraw = false;
  whoWinner = null;
  whoLoser = null;
    
  constructor(){
  }
  
  
  makeMove(positionNumber){
    if(this.isValidMove(positionNumber)){
      this.
    }
  }
  
  undoLastMove(){
  }
  
  resetMatch(){
  }

  switchPlayers(){
  }
  
  unpauseMatch(){
  }
  
  pauseMatch(){
  }
    
  get positions(){
    
  }
  
  set position(positionNumber){
    if(this.whoPlaying != null){
      this.board.position(positionNumber, this.whoPlaying);
      return true;
    }
    else return false;
  }
  
  get moveCount(){
    return this.moveCount;
  }
  
  get isValidMove(positionNumber){
    let positions = this.board.positions;
    if(positions[positionNumber] == null){
      return true;
    }
    else return false;
  }
  
  get moveMinimaxScore(positionNumber){
  }
  
  get hasGameOver(){
    return this.isGameOver;
  }
  
  get hasWin(){
    return this.hasWon;
  }
  
  get hasDraw(){
    return this.hasDraw;
  }
  
  get whoWinner(){
    if(whoWinner != null){
      return JSON.stringify(this.whoWinner.info);
    }
    else return false;
    
  }
  
  get whoLoser(){
    if(whoLoser != null){
      return JSON.stringify(this.whoLoser.info);
    }
    else return false;
  } 
  
  get whoPlayingType(){
    if(whoPlaying != null){
      return this.whoPlaying.type.toUpperCase();
    }
    else return false;
  }
  
  get whoWaitingType(){
    if(whoWaiting != null){
      return this.whoWaiting.type.toUpperCase();
    }
    else return false;
  }
  
  get whoPlayingName(){
    if(whoPlaying != null){
      return this.whoPlaying.name.toUpperCase();
    }
    else return false;
  }

  get whoWaitingName(){
    if(whoWaiting != null){
      return this.whoWaiting.name.toUpperCase();
    }
    else return false;
  }
  
  get whoPlayingMark(){
    if(this.whoPlaying != null){
      return this.whoPlaying.maek.toUpperCase();
    }
    else return false;
  }

  get whoWaitingMark(){
    if(this.whoWaiting != null){
      return this.whoWaiting.mark.toUpperCase();
    }
    else return false;
  }
  

  
  get xPlayerType(){
    return this.xPlayer.type;
  }
  
  set xPlayerType(type){
    this.xPlayer.type = type;
  }
  
  get oPlayerType(){
    return this.oPlayer.type;
  }
  
  set oPlayerType(type){
    this.oPlayer.type = type;
  }
  
  get xPlayerName(){
    return this.xPlayer.name;
  }
  
  set xPlayerName(name){
    this.xPlayer.name = name;
  }
  
  get oPlayerName(){
    return this.oPlayer.name;
  }
  
  set oPlayerName(name){
    this.oPlayer.name = name;
  }
}

class Player{
  info;
  
  constructor(info = {name: '', type: '', mark: ''}){
    this.info = info;
  }
  
  get info(){
    return this.info;
  }
  
  set type(type){
    this.info.type = type;
  }
  
  get type(){
    return this.info.type;
  }
  
  set name(name){
    this.info.name = name;
  }
  
  get name(){
    return this.info.name;
  }
  
  set mark(name){
    this.info.mark = mark;
  }
  
  get mark(){
    return this.info.mark;
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

    set position(positionNumber, player){
    }

    get positions(){
    }

    resetBoard(){
    }
  
  }



