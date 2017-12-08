//Inicio juego
$(document).ready(function(){

  game = new Game(3);
  startGame(game);


  function startGame(game) {
    game.createCellsArray();
    game.drawCellsArray();
    $(".cell").click(function() {
        //console.log(this.id);
        game.myclick(this.id);
        //console.log(game.boardstatus());

    });
  }

  function resetGame(game){

      game.reset();

  }



  $('#button').click(function() {
    //alert('Select your move to play');
    resetGame(game);
  });

});
