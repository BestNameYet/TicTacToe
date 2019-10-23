class Controller{
   
  constructor(boardModel, boardView, turnView){
    this.boardModel = boardModel;
    this.boardView = boardView;
    this.turnView = turnView;
    this.player = new Player("human");
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
   let position = Number(choice.id);
   let valid = validMove(this.boardModel);
   if(valid){
      this.boardModel[position] = this.player;
      this.updateBoardView();
      if(player.getWinner(board)){
         this.updateWinnerView();
      }
      else {
         this.updateTurnInfoView();
         this.player = new Player(this.player.opponentType);
      }
         
      
   }
   else
      alert('That square has already been played.');
  }

  updateTurnInfoView(){
     if(this.player.opponentType == "human"){
        this.turnView.innerHTML = "X's turn";
     }
     else turnView.innerHTML = "O's turn";
  }
  updateWinnerView(){
     if(this.player.type == "human"){
        this.turnView.innerHTML = "X wins!";
     }
     else this.turnView.innerHTML = "O wins!";
  }

  newGameView(){
  }

  newGameModel(){
  }
}


                       
                   
