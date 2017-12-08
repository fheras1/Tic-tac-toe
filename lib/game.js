//Objeto game
function Game(dimension) {
  // Total row array length
  this.dimension = dimension;
  this.cellsArray = [];
  this.turn = 1;
  this.ready;
}

Game.prototype.myclick = function (id) {

    var id = id.split("_"); // 0_2 -> id[0] = 0; id[1] = 2;

    //console.log(id);

    this.changecell(id);

    console.log("Estado: "+this.boardstatus());

    switch(this.boardstatus()){

        case 1:
            $("#msg").text("Ganan las X");
            this.ready = 0;
            break;

        case 2:
            $("#msg").text("Ganan las 0");
            this.ready = 0;
            break;

        case 3:
            $("#msg").text("Tablas");
            this.ready = 0;
            break;

        case 0:
            console.log("sigue el juego");
            break;

    }

};

Game.prototype.changecell = function(id){

    var c = this.cellsArray;

    if(c[id[0]][id[1]].status != 0 || this.ready == 0){

        console.log("celda ocupada");

    }else{

        c[id[0]][id[1]].setstatus(this.turn);

        console.log("jugada turno: "+this.turn);

        if(this.turn == 1){

            //$("#"+id[0]+"_"+id[1]).css("background", "#088");


            this.turn = 2;

        }else{

            //$("#"+id[0]+"_"+id[1]).addClass("o");

            this.turn = 1;

        }

    }


};

Game.prototype.boardstatus = function(){

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

                    //console.log(i+"_"+j);

                    if(c[i][j].status == 0){

                        return 0;

                    }

                }

            }

            return 3;

        }

    }

};

Game.prototype.reset = function(){

    var c = this.cellsArray;

    $("#msg").text("");

    for(i = 0; i < c.length; i++){

        for(j = 0; j < c[i].length; j++){

            c[i][j].setstatus(0);

        }

    }

    this.ready = 1;


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
        this.cellsArray[i][j].myid= i + "_" + j;
        $("#"+i+"_").append("<td id= '" + i + "_" +j +"' class = 'cell'></tr>");
    }
  }

    this.ready = 1;

};
