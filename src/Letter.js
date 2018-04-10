// letter is the letter from the current word, which gets called in Word.js
function Letter(letter) {
  // stores each individual letter
  this.letter = letter;

  // used to check if the letter can be revealed or not
  this.revealed = false;
}

// used to reveal the letter
Letter.prototype.revealCharacter = function() {
  // auto reveals white space
  if (this.letter === ' ') {
    return ' ';
  }

  // runs if the letter has not been revealed
  else if (!this.revealed) {
    return '_';
  }

  // If this runs, then the guess matches the letter and it gets revealed
  return this.letter;
}

// updates the status of the letter to see if it has been guessed or not
Letter.prototype.checkLetter = function(guess) {
  // then sets this value to true so it can be revealed in the revealCharacter method
  if (guess === this.letter) {
    this.revealed = true;
  }

  // returns either an _, ' ', or the correctly guessed letter
  return this.revealCharacter();
}

module.exports = { Letter: Letter };

// the user will guess a letter. that guess gets passed into this object.
// if the guess is the same as the letter in the object, then the letter is revealed