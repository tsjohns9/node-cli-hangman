// letter is the letter from the current word, which gets called in Word.js
function Letter(letter) {
  this.letter = letter;
  this.revealed = false;
}

// used to reveal an empty space, or the letter if it was correctly guessed
Letter.prototype.revealCharacter = function() {
  if (this.letter === ' ') {
    return ' ';
  }
  else if (!this.revealed) {
    this.mistakes--;
    return '_';
  }
  return this.letter;
}

// updates the status of the letter to see if it has been guessed or not
Letter.prototype.checkLetter = function(guess) {
  if (guess === this.letter) {
    this.revealed = true;
  }
  return this.revealCharacter();
}

module.exports = { Letter: Letter };

// the user will guess a letter. that guess gets passed into this object.
// if the guess is the same as the letter in the object, then the letter is revealed