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
}

// initializes the game
var currentGame = new Word(randomWord());
var letterArr = currentGame.letterArr;
currentGame.addLetter();
console.log(currentGame.letterArr);

// reveals the correct guesses on the word
var updateWord = function(guess) {
  tmp = '';
  for (var i = 0; i < letterArr.length; i++) {
    tmp += letterArr[i].checkLetter(guess) + ' ';
  }
  return tmp;
}

// console.log(tmp);

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