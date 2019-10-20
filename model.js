window.player = {
  isHuman: true,
  symbol: 'X',
  switch: function(){
    this.isHuman = !isHuman
    if(isHuman){
      symbol = 'X';
    }
    else
      symbol = 'Y';
  } 
}
