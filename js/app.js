
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

    var guessString; //Keeps the user's guess (A String)
    var guessNum; //Keeps the user's guess made into a number.
    var guessCount = 0; //Guessing Counter

    //When "Guess Button" is clicked...
    $('#guessButton').click(function() {
      //Prevents the page from refreshing on click
      event.preventDefault();
      //Gets the value of the user's guess.
      guessString = $('#userGuess').val();
      //Converts the user's guess into a number and sets it to guessNum.
      guessNum = parseInt(guessString);

      console.log(guessNum);

      //If the user's number is 100 or less.....
      if (guessNum <= 100) {
      //Adds +1 to guessCount;
      guessCount++;
      console.log(guessCount);

      //Deletes the content of #count and appends it with the new count.
      $('#count').empty().append(guessCount);

      //Adds the user's guess to the list #guessList
      $('#guessList').append('<li>' + guessNum + '</li>');
    }
      //If the user's number is not between 1 and 100....
      else {
        //Alerts the user that their number is not valid.
        alert('Please enter a number between 1 and 100');
      }

    });


});


