
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});







    //Creates a new game.
    function newGame() {
      randomNumber = parseInt((Math.random() * 100)+1);
      console.log(randomNumber);

      //Sets the h2 back to the default.
      $('#feedback').empty().append('Make your guess!');

      //Clears List of numbers
      $('#guessList').empty();

      //Clears Count
      $('#count').empty().append('0');

    }


    function numberChecker(number) {

      if (number == randomNumber) {
          alert('Correct! The answer is ' + guessNum);
          newGame();

        }
        else if (Math.abs(number-randomNumber) <= 10){
            $('#feedback').empty().append('Warmer!');
        }

        else if (Math.abs(number-randomNumber) <= 30){
            $('#feedback').empty().append('Warm!');
        }

        else if (Math.abs(number-randomNumber) <= 50){
            $('#feedback').empty().append('Cold!');
        }

    }





    //Creates a new game on page load.
    newGame();






    //Creates a new game when it is clicked.
    $('.new').click(function() {
      newGame();
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

      //calls number checker function
      numberChecker(guessNum);

      }
      //If the user's number is not between 1 and 100....
      else {
        //Alerts the user that their number is not valid.
        alert('Please enter a number between 1 and 100');
      }

    });


});


