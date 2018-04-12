var Letter = require('./Letter');

// currentWord is the random word for the current game
function Word(currentWord) {
  // stores an array of each Letter object
  this.letterArr = [];

  // tracks incorrect guesses. does not subtract the same incorrect guess from your total mistakes
  this.wrongGuess = [];
  this.currentWord = currentWord;
  this.mistakes = 6;
}

// uses the Letter constructor to create a new object for each letter of the current word
Word.prototype.addLetter = function() {
  for (var i = 0; i < this.currentWord.length; i++) {
    this.letterArr.push(new Letter(this.currentWord[i]));
  }
}

// reveals the correct guesses on the word
Word.prototype.updateWord = function(guess) {
  // clears out the string to update it with the string based on the guess.
  var hiddenWord = '';

  // checks the guess against each letter
  for (var i = 0; i < this.letterArr.length; i++) {
    hiddenWord += this.letterArr[i].checkLetter(guess) + ' ';
  }

  // contains the string with its revealed and hidden characters
  return hiddenWord;
}

module.exports = Word;