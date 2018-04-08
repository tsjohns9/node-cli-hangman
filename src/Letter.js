function Letter(letter) {
  this.letter = letter;
  this.revealed = false;
}

Letter.prototype.revealCharacter = function() {
  if (!this.revealed) {
    return '_';
  } else {
    return this.letter;
  }
}

Letter.prototype.checkLetter = function(guess) {
  if (guess === this.letter) {
    console.log('true');
    this.revealed = true;
  }
  else {
    console.log('false');
  }
}

module.exports = { Letter: Letter };

// the user will guess a letter. that guess gets passed into this object.
// if the guess is the same as the letter in the object, then the letter is revealed