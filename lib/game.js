//Objeto game
function Game(dimension) {
  // Total row array length
  this.dimension = dimension;
  this.cellsArray = [];
    this.turn = 1;
    }
Game.prototype.myclick = function (id) {

};

Game.prototype.boardStatus = function () {
  var c = this.cellsArray;

  if((c[0][0].status == 1 && c[0][1].status == 1 && c[0][2].status == 1)

      || (c[1][0].status == 1 && c[1][1].status == 1 && c[1][2].status == 1)
      || (c[2][0].status == 1 && c[2][1].status == 1 && c[2][2].status == 1)

      || (c[0][0].status == 1 && c[1][0].status == 1 && c[2][0].status == 1)
      || (c[0][1].status == 1 && c[1][1].status == 1 && c[2][1].status == 1)
      || (c[0][2].status == 1 && c[1][2].status == 1 && c[2][2].status == 1)

      || (c[0][0].status == 1 && c[1][1].status == 1 && c[2][2].status == 1)
      || (c[0][2].status == 1 && c[1][1].status == 1 && c[2][0].status == 1)){ //Jugador 1

        return 1;

      }else{


              if((c[0][0].status == 2 && c[0][1].status == 2 && c[0][2].status == 2)
                  || (c[1][0].status == 2 && c[1][1].status == 2 && c[1][2].status == 2)
                  || (c[2][0].status == 2 && c[2][1].status == 2 && c[2][2].status == 2)

                  || (c[0][0].status == 2 && c[1][0].status == 2 && c[2][0].status == 2)
                  || (c[0][1].status == 2 && c[1][1].status == 2 && c[2][1].status == 2)
                  || (c[0][2].status == 2 && c[1][2].status == 2 && c[2][2].status == 2)

                  || (c[0][0].status == 2 && c[1][1].status == 2 && c[2][2].status == 2)
                  || (c[0][2].status == 2 && c[1][1].status == 2 && c[2][0].status == 2)){ //Jugador 2

                    return 2;

              }else{

                  for(i = 0; i < c.length; i++){

                      for(j = 0; j < c[i].length; j++){
                        console.log(i+"_"+j);

                    if(c[i][j].status == 0){

                        return 0;

                    }

                }

            }

            return 3;

        }

    }

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
