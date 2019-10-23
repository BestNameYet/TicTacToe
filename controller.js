class Controller{
   
  constructor(boardModel, boardView, turnView){
    this.boardModel = boardModel;
    this.boardView = boardView;
    this.turnView = turnView;
    this.player = new Player("human");
  }

  updateBoardView(){
   for(let i = 0; i<boardModel.length; i++){
      if(boardModel[i].type == "human"){
         boardView[i].value = "X";
      }
      else if(boardModel[i].type == "computer"){
         boardView[i].value = "O";
      }
      else if(boardModel[i].type == "blank"){
         boardView[i].value = "";
      }
    }
  }

  updateBoardModel(choice){
   let position = Number(choice.id);
   let valid = validMove(boardModel);
   if(valid){
      boardModel[position] = this.player;
      this.updateBoardView();
      if(player.getWinner(board)){
         this.updateWinnerView();
      }
      else {
         this.updateTurnInfoView();
         this.player = new Player(player.opponentType);
      }
         
      
   }
   else
      alert('That square has already been played.');
  }

  updateTurnInfoView(){
     if(this.player.opponentType == "human"){
        turnView.innerHTML = "X's turn";
     }
     else turnView.innerHTML = "O's turn";
  }
  updateWinnerView(){
     if(this.player.type == "human"){
        turnView.innerHTML = "X wins!";
     }
     else turnView.innerHTML = "O wins!";
  }

  newGameView(){
  }

  newGameModel(){
  }
}


                       
                   
