const PlayerEnum = {
  NULL: 0,
  HUMAN: 1,
  COMPUTER: 2
};

const winners = [
  PlayerEnum.HUMAN*(Math.pow(3,0)+Math.pow(3,1)+Math.pow(3,2)),
  PlayerEnum.HUMAN*(Math.pow(3,3)+Math.pow(3,4)+Math.pow(3,5)),
  PlayerEnum.HUMAN*(Math.pow(3,6)+Math.pow(3,7)+Math.pow(3,8)),
  PlayerEnum.COMPUTER*(Math.pow(3,0)+Math.pow(3,1)+Math.pow(3,2)),
  PlayerEnum.COMPUTER*(Math.pow(3,3)+Math.pow(3,4)+Math.pow(3,5)),
  PlayerEnum.COMPUTER*(Math.pow(3,6)+Math.pow(3,7)+Math.pow(3,8)),
  PlayerEnum.HUMAN*(Math.pow(3,0)+Math.pow(3,3)+Math.pow(3,6)),
  PlayerEnum.HUMAN*(Math.pow(3,1)+Math.pow(3,4)+Math.pow(3,7)),
  PlayerEnum.HUMAN*(Math.pow(3,2)+Math.pow(3,5)+Math.pow(3,8)),
  PlayerEnum.COMPUTER*(Math.pow(3,0)+Math.pow(3,3)+Math.pow(3,6)),
  PlayerEnum.COMPUTER*(Math.pow(3,1)+Math.pow(3,4)+Math.pow(3,7)),
  PlayerEnum.COMPUTER*(Math.pow(3,2)+Math.pow(3,5)+Math.pow(3,8)),
  PlayerEnum.HUMAN*(Math.pow(3,0)+Math.pow(3,4)+Math.pow(3,8)),
  PlayerEnum.HUMAN*(Math.pow(3,2)+Math.pow(3,4)+Math.pow(3,6)),
  PlayerEnum.COMPUTER*(Math.pow(3,0)+Math.pow(3,4)+Math.pow(3,8)),
  PlayerEnum.COMPUTER*(Math.pow(3,2)+Math.pow(3,4)+Math.pow(3,6))
];

class GameController{
  constructor(){
  }
  displayBoard(model, view){
    model.
  }
  isWinner(model){
    reutrn winners.includes(board.id);
  }
}

class Player{
  constructor(type){
    this.type = type
  }
}

class Board{
  constructor(id = 0, series = [0]){
    this.id = id;
    this.series = series;
  }
  move(location, player){
    var potentialMove = Math.pow(3,location)*(player.type);
    if(!this.series.includes(potentialMove)){
      var id = this.id + potentialMove;
      var series = Array.from(this.series);
      series.push(potentialMove);
      return new Board(id, series);
    }
    else
      return false;
  }
}
