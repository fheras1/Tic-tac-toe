//Inicio juego
$(document).ready(function(){

  game = new Game();
  startGame(game);

//Inicializa la tabla
  function startGame(game) {
    game.createCellsArray();
    game.drawCellsArray();
    $("#msg").text("Player 1");
    $("#button").css("display", "none");
    $(".cell").click(function() {
        //console.log(this.id);
        game.myclick(this.id);
        //console.log(game.boardstatus());

    });
  }
//Resetea tablero
  function resetGame(game){

      game.reset();

  }

  $('#button').click(function() {
    //alert('Select your move to play');
    resetGame(game);
  });

});
