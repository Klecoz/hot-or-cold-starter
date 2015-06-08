
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    //Creates Random Number with no decimals on page load.
    var randomNumber = parseInt((Math.random() * 100)+1);
    console.log(randomNumber);

    //When "New Game" is clicked.....
    $('.new').click(function() {

      //creates a new random number when New Game button is clicked.
      randomNumber = parseInt((Math.random() * 100)+1);
      console.log(randomNumber);

    });

    var guessString;
    var guessNum;

    //When "Guess Button" is clicked...
    $('#guessButton').click(function() {
      event.preventDefault();
      guessString = $('#userGuess').val();
      guessNum = parseInt(guessString);
      console.log(guessNum);
    });


});


