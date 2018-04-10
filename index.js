var inquirer = require("inquirer");
var gameWords = require('./src/game-words');
var wordFile = require('./src/word');
var Word = wordFile.Word;

var mistakes = 6;

// stores the users guess
var guess = process.argv[2];

// This contains the string the the revealed and hidden characters.
var tmp = '';

// gets a random word for the game
var randomWord = function() {
  return gameWords.words[Math.floor(Math.random() * gameWords.words.length)];
};

// initializes the game
var currentGame = new Word(randomWord());

// array which contains all the letters
var letterArr = currentGame.letterArr;

// creates each letter object
currentGame.addLetter();

console.log(currentGame.letterArr);

// reveals the correct guesses on the word
var updateWord = function(guess) {
  // clears out the string to update it with the string based on the guess.
  tmp = '';

  // checks the guess against each letter
  for (var i = 0; i < letterArr.length; i++) {
    tmp += letterArr[i].checkLetter(guess) + ' ';
  }

  // contains the string with its revealed and hidden characters
  return tmp;
};

var playGame = function() {
  if (mistakes > 0) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess a letter!\n",
          name: "letter"
        }
      ])
      .then(function (data) {
        console.log(updateWord(data.letter));
        playGame();
      });
  } else {
    console.log('game over');
  }
};

playGame();