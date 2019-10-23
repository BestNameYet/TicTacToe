class Player{
  constructor(type){
    this.type = type;
    if(this.type == "human"){
      this.opponentType = "computer";
    }
    else if(this.type == "computer"){
      this.opponentType = "human";
    }
    else
      this.opponentType = null;
  }
  getWinner(board){
    var booleanBoard = board.map(x => {
      if(x.type !== this.type){
        return false;
      }
      else return true;
    });
    for(let i = 0; i<9; i=i+3){
      if(booleanBoard[i] && booleanBoard[i+1] && booleanBoard[i+2]){
        return true;
      }
    }
    for(let i = 0; i<3; i++){
      if(booleanBoard[i] && booleanBoard[i+3] && booleanBoard[i+6]){
        return true;
      }
    }
    if(booleanBoard[8] && booleanBoard[4] && booleanBoard[0]){
      return true;
    }
    if(booleanBoard[6] && booleanBoard[4] && booleanBoard[2]){
      return true;
    }
    return false;
  } 
}

const board = (function(){
  var player = new Player("blank");
  return Array(9).fill(player);
})();

function minimax(board, player){
  var opponent = new Player(player.opponentType);
  if(player.getWinner(board)){
    return 1;
  }
  else if(opponent.getWinner(board){
    return -1;}
  var move = -1;
  var score = -2;
  for(let i = 0; i<9; i++){
    if(board[i].type == "blank"){
      var boardWithNewMove = Array.from(board);
      boardWithNewMove[i] = player;
      var scoreWithNewMove = -1*minimax(boardWithNewMove, opponent);
      if(scoreWithNewMove > score){
        score = scoreWithNewMove;
        move = i;
      }
    }
  }
  if(move == -1){
  return 0;}
  return score;
}

function validMove(board, position){
 return board[position].type == "blank";
}

const boardView = (function(){
  var array = [];
  for(let i = 0; i < 9; i++){
    var id = Number(i).toString();
    var elem = window.document.getElementById(""+id);
    array.push(elem);
  }
  return array;
})();

const turnInfoView = window.document.getElementById('status');

const newGameButtonView = window.document.getElementById('newGame');

class Controller{
   
  constructor(boardModel, boardView, turnView){
    this.boardModel = boardModel;
    this.boardView = boardView;
    this.turnView = turnView;
    this.player = new Player("human");
    this.gameOver = false;
    this.move = 0;
  }

  updateBoardView(){
   for(let i = 0; i<this.boardModel.length; i++){
      if(this.boardModel[i].type == "human"){
         this.boardView[i].value = "X";
      }
      else if(this.boardModel[i].type == "computer"){
         this.boardView[i].value = "O";
      }
      else if(this.boardModel[i].type == "blank"){
         this.boardView[i].value = "";
      }
    }
  }

  updateBoardModel(choice){
   if(this.gameOver){
    alert("The game is already over.");
    return;
   }
   
   let position = Number(choice.id);
   let valid = validMove(this.boardModel, position);
   if(valid){
      this.boardModel[position] = this.player;
      this.move = this.move+1;
      this.updateBoardView();
      if(this.player.getWinner(board)){
         this.updateWinnerView();
         this.gameOver = true;
      }
      else if(this.move == 9){
        this.updateDrawView();
        this.gameOver = true;
      }  
      else {
         this.updateTurnInfoView();
         this.player = new Player(this.player.opponentType);
         if(this.player.type == "computer"){
          computerTurn();
         }
      }
         
      
   }
   else
      alert('That square has already been played.');
  }
  
  computerTurn(){
    var move = -1;
    var score = -2;
    for(let i = 0; i < 9; i++){
      if(this.boardModel[i].type = "blank"){
        var boardWithNewMove = Array.from(board);
        boardWithNewMove[i] = player;
        minimaxScore = minimax(boardWithNewMove, player);
        if(minimaxScore > score){
          score = minimaxScore;
          move = [i];
        }
      }
    }
    this.boardModel[i] = this.player;
    if(this.player.getWinner(board)){
         this.updateWinnerView();
         this.gameOver = true;
      }
      else if(this.move == 9){
        this.updateDrawView();
        this.gameOver = true;
      }  
      else {
         this.updateTurnInfoView();
         this.player = new Player(this.player.opponentType);
      }
    }

  updateTurnInfoView(){
     if(this.player.opponentType == "human"){
        this.turnView.innerHTML = "X's turn";
     }
     else this.turnView.innerHTML = "O's turn";
  }
  updateWinnerView(){
     if(this.player.type == "human"){
        this.turnView.innerHTML = "X wins!";
     }
     else this.turnView.innerHTML = "O wins!";
  }
  
  updateDrawView(){
    this.turnView.innerHTML = "It's a draw!";
  }

  newGameView(){
    this.updateBoardView();
    this.turnView.innerHTML = "X's turn";
  }
  
  newGame(){
    this.gameOver = false;
    this.move = 0;
    this.player = new Player("human");
    this.newGameModel();
    this.newGameView();
  }

  newGameModel(){
    this.boardModel.fill(new Player("blank"));
  }
}

const controller = new Controller(board, boardView, turnInfoView);
