//Objeto cell
function Cell() {
  // Estado inicial: 0 = Intacta / 1 = Marcada jugador 1 / 2 = Marcada jugador 2
  this.status = 0;
  this.myid;
}
//Controla el estado de las celdas
Cell.prototype.setStatus = function(s){

    this.status = s;

    id = this.myid.split("_");

    //console.log("id: "+id);

    switch(s){
//resetea celda
        case 0:

            $("#"+id[0]+"_"+id[1]).removeClass("x").removeClass("o");

            break;
//Jugador1
        case 1:

            $("#"+id[0]+"_"+id[1]).addClass("x");

            break;
//Jugador2
        case 2:

            $("#"+id[0]+"_"+id[1]).addClass("o");

            break;

    }

};
