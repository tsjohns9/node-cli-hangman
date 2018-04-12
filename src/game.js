var inquirer = require("inquirer");
var randomWord = require('./game-words');
var Word = require('./Word');

// initializes the game
var game = new Word(randomWord());

// creates each letter object
game.addLetter();

// stores the word with its hidden and revealed characters.
// done this way so that the hidden word can be shown during the prompt to the user
var hiddenWord = game.updateWord();

var playGame = function() {

  // game is over if mistakes are less than 0
  if (game.mistakes > 0) {

    // if the string does not include '_', then the player won
    if (hiddenWord.includes('_')) {

      inquirer
        .prompt([
          {
            type: "input",
            message: "Guess a letter!\n" + hiddenWord + "\n",
            name: "letter"
          }
        ])

        // returns user input
        .then(function (data) {

          // displays the revealed and hidden characters
          hiddenWord = game.updateWord(data.letter);

          //used to check if a guess was incorrect
          if (!game.currentWord.includes(data.letter) && !game.wrongGuess.includes(data.letter)) {
            game.wrongGuess.push(data.letter);
            game.mistakes--;
            console.log('INCORRECT!' + '\n');
            console.log(game.mistakes + ' guesses remaining' + '\n');
          }

          playGame();
        });

    } else { // end hiddenWord.includes('_') conditional
      console.log(hiddenWord + '\n');
      console.log('You got the word right! Here\'s your next word.' + '\n');

        // sets game to default values so that a new game can automatically begin
        hiddenWord = null;
        game = new Word(randomWord());
        game.addLetter();
        hiddenWord = game.updateWord();
        game.mistakes = 6;
        playGame();
    }

  } else { // end mistakes > 0 conditional

    console.log('Game over. The word was ' + game.currentWord);
  }
};

module.exports = playGame;