var inquirer = require("inquirer");
var gameWords = require('./src/game-words');
var wordFile = require('./src/word');
var Word = wordFile.Word;

// gets a random word for the game
var randomWord = function() {
  return gameWords.words[Math.floor(Math.random() * gameWords.words.length)];
}

var currentGame = new Word(randomWord());
currentGame.addLetter();
console.log(currentGame.letterArr[0].checkLetter('a'));




// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "Guess a letter!\n",
//       name: "letter"
//     }
//   ])
//   .then(function(data) {

//   });
