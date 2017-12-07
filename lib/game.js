//Objeto game
function Game(dimension) {
  // Total row array length
  this.dimension = dimension;
  this.cellsArray = [];
    this.turn = 0;
    }
Game.prototype.myclick = function (id) {
if 
};

Game.prototype.createCellsArray = function() {
  //console.log('Entro en Create Cell Array');
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

Game.prototype.drawCellsArray = function() {
  $('#mytable').append('<table id = "table"></table>');

  for (var i = 0; i < this.cellsArray.length; i++) {
      // Crear un TR
      // Asignar una ID 1[i]
    $("#table").append("<tr id= '" + i + "_'></tr>");


    for(var j = 0; j < this.cellsArray[i].length; j++) {
        // td con cada cell cell + j
        this.cellsArray[i][j].myid= i + "_" +j;
        $("#"+i+"_").append("<td id= '" + i + "_" +j +"' class = 'cell'></tr>");
    }
  }


};
