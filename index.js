var inquirer = require("inquirer");
var gameWords = require('./src/game-words');
var wordFile = require('./src/word');
var Word = wordFile.Word;

var tmp = '';

// gets a random word for the game
var randomWord = function() {
  return gameWords.words[Math.floor(Math.random() * gameWords.words.length)];
}

// initializes the game
var currentGame = new Word(randomWord());
currentGame.addLetter();
console.log(currentGame.letterArr);

for (var i = 0; i < currentGame.letterArr.length; i++) {
  if (!currentGame.letterArr[i].revealed) {
    tmp += '_ ';
  } else {
    tmp += currentGame.letterArr[i].letter;
  }
}
console.log(tmp);


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
