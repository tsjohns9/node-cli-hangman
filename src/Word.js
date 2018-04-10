var letterFile = require('./letter');
var Letter = letterFile.Letter;

// currentWord is the random word for the current game
function Word(currentWord) {
  // stores an array of each Letter object
  this.letterArr = [];
  this.currentWord = currentWord;
}

// returns our current word;
Word.prototype.returnWord = function() {
  return currentWord;
}

// uses the Letter constructor to create a new object for each letter of the current word
Word.prototype.addLetter = function() {
  for (var i = 0; i < this.currentWord.length; i++) {
    this.letterArr.push(new Letter(this.currentWord[i]));
  }
}

module.exports = { Word: Word };