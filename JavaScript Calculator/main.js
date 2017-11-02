$(document).ready(function() {

  //model

  //view

  var screen = $('.mainScreen');
  var key = $('.key');
  //control
  //onclick put val on screen.
  key.click(function(){
    var input = this.innerHTML;
    console.log(input);
    screen.append(input);
  });

  //onpress "enter" evaluate
    console.log( "ready!" );
});
