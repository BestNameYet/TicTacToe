

window.player = {
  isHuman: true,
  symbol: 1,
  switch: function(){
    this.isHuman = !this.isHuman
    if(this.isHuman){
      this.symbol = -1;
    }
    else
      this.symbol = 1;
  } 
}

window.board = new Map();
for(var i = 0; i < 10; i++){
  board.set(i, 0);
}
