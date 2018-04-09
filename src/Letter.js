// letter is the letter from the current word, which gets called in Word.js
function Letter(letter) {
  this.letter = letter;
  this.revealed = false;
}

// used to reveal an empty space, or the letter if it was correctly guessed
Letter.prototype.revealCharacter = function() {
  if (!this.revealed) {
    return console.log('_');
  }
  return console.log(this.letter);
}

// 
Letter.prototype.checkLetter = function(guess) {
  if (guess === this.letter) {
    console.log('true');
    this.revealed = true;
  }
  this.revealCharacter();
}

module.exports = { Letter: Letter };

// the user will guess a letter. that guess gets passed into this object.
// if the guess is the same as the letter in the object, then the letter is revealed