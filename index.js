var inquirer = require("inquirer");
var gameWords = require('./src/game-words');
var Word = require('./src/word');

var hiddenWord;

// each game gets a total of 6 guesses
var mistakes = 6;

// tracks incorrect guesses. does not subtract the same incorrect guess from your total mistakes
var wrongGuess = [];

// stores the users guess
var guess = process.argv[2];

// gets a random word for the game
var randomWord = function() {
  return gameWords[Math.floor(Math.random() * gameWords.length)];
};

// initializes the game
var game = new Word(randomWord());

// array which contains all the letters
var letterArr = game.letterArr;

// creates each letter object
game.addLetter();

// remove the comment, and you will be able to see the word
// console.log(letterArr);

// reveals the correct guesses on the word
var updateWord = function(guess) {
  // clears out the string to update it with the string based on the guess.
  hiddenWord = '';

  // checks the guess against each letter
  for (var i = 0; i < letterArr.length; i++) {
    hiddenWord += letterArr[i].checkLetter(guess) + ' ';
  }

  // contains the string with its revealed and hidden characters
  return hiddenWord;
};

// stores the word with its hidden and revealed characters.
// done this way so that the hidden word can be shown during the prompt to the user
hiddenWord = updateWord();

var playGame = function() {

  // game is over if mistakes are less than 0
  if (mistakes > 0) {

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
          updateWord(data.letter);

          //used to check if a guess was incorrect
          if (!game.currentWord.includes(data.letter) && !wrongGuess.includes(data.letter)) {
            wrongGuess.push(data.letter);
            mistakes--;
            console.log('INCORRECT!' + '\n');
            console.log(mistakes + ' guesses remaining' + '\n');
          }

          playGame();
        });

    } else { // end hiddenWord.includes('_') conditional

      console.log('You got the word right! Here\'s your next word.' + '\n');

        // sets game to default values so that a new game can automatically begin
        hiddenWord = null;
        game = new Word(randomWord());
        letterArr = game.letterArr;
        game.addLetter();
        hiddenWord = updateWord();
        mistakes = 6;
        playGame();
    }

  } else { // end mistakes > 0 conditional

    console.log('Game over. The word was ' + game.currentWord);
  }
};

playGame();