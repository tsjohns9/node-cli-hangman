var letterFile = require('./letter');
var Letter = letterFile.Letter;

function Word(currentWord) {
  this.letterArr = [];
  this.currentWord = currentWord;
};

Word.prototype.returnWord = function() {
  return currentWord;
}

Word.prototype.addLetter = function() {
  for (i = 0; i < this.currentWord.length; i++) {
    this.letterArr.push(new Letter(this.currentWord[i]));
  }
}

module.exports = { Word: Word };