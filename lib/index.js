//Inicio juego
$(document).ready(function(){
  $('#button').click(function() {
    // alert('Select your move to play');
    startGame();
  });

  function startGame() {
    game = new Game(3);
    game.createCellsArray();
    game.drawCellsArray();
    $(".cell").click(function() {
        // console.log(this.id);
        game.myclick(this.id);
    });
  }

});
