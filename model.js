window.player = {
  isHuman: true,
  symbol: 'X',
  switch: function(){
    this.isHuman = !this.isHuman
    if(this.isHuman){
      this.symbol = 'X';
    }
    else
      this.symbol = 'Y';
  } 
}
