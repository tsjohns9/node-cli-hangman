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
  if (this.letter === " ") {
    return " ";
  }

  // runs if the letter has not been revealed
  else if (!this.revealed) {
    return "_";
  }

  // If this runs, then the guess matches the letter and it gets revealed
  return this.letter;
};

// updates the status of the letter to see if it has been guessed or not
Letter.prototype.checkLetter = function(guess) {
  // Allows String.toUpperCase to be called on guess because guess is not initially a string. You get guess.toUpperCase() is not a function if you don't.
  guess = guess || "";

  // sets this value to true so it can be revealed in the revealCharacter method.  Check guess and the letter as upper case to ignore case.
  if (guess.toUpperCase() === this.letter.toUpperCase()) {
    this.revealed = true;
  }

  // returns either an _, ' ', or the correctly guessed letter
  return this.revealCharacter();
};

module.exports = Letter;
