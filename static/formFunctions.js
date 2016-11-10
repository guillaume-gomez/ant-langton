function init() {
  document.getElementById('play-pause').style.visibility = 'hidden';
  window.play = true;

  window.updateHistorySlider = function updateHistorySlider(maxSize) {
    $('#history').prop('max', maxSize);
  }
}

function showValue(newValue, id)
{
  document.getElementById(id).innerHTML=newValue;
  switch(id) {
    case 'rangeSpeed':
      window.ElapsedTime = newValue;
    break;
    case 'gridSizes':
      window.gridSize = newValue;
    break;
    case 'historyValue':
      window.historyStep = newValue;
      goToStep();
    break;
  }
}

function goToStep() {
  if(window.gameInstance) {
    window.gameInstance.state.states.GameState.setSimulationTo(window.historyStep);
  }
}

function startGame() {
  if (window.gridSize === undefined) {
    window.gridSize = document.getElementById('gridSizes').innerHTML;
  }

  if(!window.gameInstance) {
    window.gameInstance = new window.game();
    document.getElementById('play-pause').style.visibility = 'visible';
    document.getElementById('submit').style.visibility = 'hidden';
    document.getElementById('grid').disabled = true;
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


document.getElementById("history").addEventListener('mouseup', function() {
  goToStep();
});