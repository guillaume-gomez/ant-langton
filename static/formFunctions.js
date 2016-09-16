function init() {
  document.getElementById('play-pause').style.visibility = 'hidden';
  window.play = true;
}

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
    document.getElementById('play-pause').style.visibility = 'visible';
    document.getElementById('submit').style.visibility = 'hidden';
  }
}

function playPause() {
  if(window.play === undefined) {
    window.play = true;
    return;
  }
  window.play = !window.play;
  if(window.play) {
    window.gameInstance.state.states.GameState.updatePosition();
  }
}