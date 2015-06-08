
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

      //Sets the h2 back to the default.
      $('#feedback').append('Make your guess!');
    });

    var guessString;
    var guessNum;
    var guessCount = 0;

    //When "Guess Button" is clicked...
    $('#guessButton').click(function() {
      //Prevents the page from refreshing on click
      event.preventDefault();
      //Gets the value of the user's guess.
      guessString = $('#userGuess').val();
      //Converts the user's guess into a number and sets it to guessNum.
      guessNum = parseInt(guessString);
      console.log(guessNum);

      //Adds +1 to guessCount;
      guessCount++;
      console.log(guessCount);

      $('#count').empty().append(guessCount);

    });


});


