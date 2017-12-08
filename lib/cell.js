//Objeto cell
function Cell(width, height) {
  // Estado inicial: 0 = Intacta / 1 = Marcada jugador 1 / 2 = Marcada jugador 2
  this.status = 0;
  this.width = width;
  this.height = height;
  this.myid;
}

Cell.prototype.setstatus = function(s){

    this.status = s;

    id = this.myid.split("_");

    console.log("id: "+id);

    switch(s){

        case 0:

            $("#"+id[0]+"_"+id[1]).removeClass("x").removeClass("o");

            break;

        case 1:

            $("#"+id[0]+"_"+id[1]).addClass("x");

            break;

        case 2:

            $("#"+id[0]+"_"+id[1]).addClass("o");

            break;

    }

};
