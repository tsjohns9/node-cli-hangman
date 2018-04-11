var inquirer = require("inquirer");
var gameWords = require('./src/game-words');
var Word = require('./src/word');

var tmp = '_';

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

console.log('letterArr: ', letterArr);

// reveals the correct guesses on the word
var updateWord = function(guess) {
  // clears out the string to update it with the string based on the guess.
  tmp = '';

  // checks the guess against each letter
  for (var i = 0; i < letterArr.length; i++) {
    tmp += letterArr[i].checkLetter(guess) + ' ';
  }

  // contains the string with its revealed and hidden characters
  return console.log(tmp);
};

var playGame = function() {
  if (mistakes > 0) {

    if (tmp.includes('_')) {
      inquirer
        .prompt([
          {
            type: "input",
            message: "Guess a letter!\n",
            name: "letter"
          }
        ])
        .then(function (data) {
          updateWord(data.letter);

          //used to check if a guess was incorrect
          if (!game.currentWord.includes(data.letter) && !wrongGuess.includes(data.letter)) {
            wrongGuess.push(data.letter);
            mistakes--;
          }
          console.log('Remaining guesses: ', mistakes);
          playGame();
        });
    } else {
      console.log('You Won!');
    }

  } else {
    console.log('game over');
  }
};

playGame();