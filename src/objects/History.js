class History {

  constructor(game, ant) {
    this.game = game;
	  this.record = [];
    this.isRecording = false;
  }

  start() {
    this.isRecording = true;
  }

  reset() {
    this.record =  [];
    this.isRecording = false;
  }

  stop() {
    this.isRecording = false;
  }

  record(step, ant, gridArray) {
    const { x, y } = ant.postion;
    this.record[step] = { x, y, grid: gridArray };
  }

  getTo(step) {
    if(!this.record[step]) {
      return null;
    }
    return this.record[step];
  }
  
}

export default History;