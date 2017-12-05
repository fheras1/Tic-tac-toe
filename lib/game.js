//Objeto game
function Board(dimension) {
  // Total row array length
  this.dimension = dimension;
  this.cellsArray = [];
}

Board.prototype.createCellsArray = function() {
  console.log('Entro en Create Cell Array');
  console.log(this.cellsArray);
  for(var i = 0; i < this.dimension; i++) {
    var row = [];
    this.cellsArray.push(row);
     for (var j = 0; j < this.dimension; j++) {
       var cell = new Cell(20,20);
       this.cellsArray[i].push(cell);
     }
  }
};

Board.prototype.drawCellsArray = function() {
  for (var i = 0; i < this.cellsArray.length; i++) {
      // Crear un TR
      // Asignar una ID 1[i]
    for(var j = 0; j < this.cellsArray[i].length; i++) {
        // td con cada cell cell + j
    }
  }
};
