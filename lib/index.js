//Inicio juego
$(document).ready(function(){
  $('#button').click(function() {
    alert('Select your move to play');
    startGame();
  });

  $(".cell").click(function() {
      console.log(this.id);

  });

  // function startGame() {
  //   game = new Game();
  // }

});
