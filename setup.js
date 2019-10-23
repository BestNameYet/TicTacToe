const boardView = (function(){
  var array = [];
  for(let i = 0; i < 9; i++){
    array.push(document.getElementById(Number(i).toString));
  }
  return array;
})();

const turnInfoView = document.getElementById('status');

const newGameButtonView = document.getElementById('newGame');

const controller = new Controller(board, boardView, turnInfoView);
