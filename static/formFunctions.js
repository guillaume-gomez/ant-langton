
function showValue(newValue, id)
{
  document.getElementById(id).innerHTML=newValue;
  if(id === 'rangeSpeed') {
    window.ElapsedTime = newValue;
  }
  else if(id === 'gridSize') {
    window.gridSize = newValue
  }
}

function startGame() {
  if(!window.gameInstance) {
    window.gameInstance = new window.game();
  }
}