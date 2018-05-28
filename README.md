# node-cli-hangman

Command line hangman game based on the Legend of Zelda. Built with Node.js, and the inquirer.js NPM package, which is used to easily accept user input.

This app was built to demonstrate the use of constructor functions, which you will find in Word.js, and Letter.js

To play, simply make your way to the root of the project and run,

```
npm install
node index.js
```

## User Stories

1. I am presented with a prompt to guess a letter.
2. I can see underscores representing each letter that has not been guessed.
3. When I guess an incorrect letter I am informed I have done so.
4. When I make an incorrect guess my total tries goes down by 1.
5. I cannot guess the same incorrect letter twice.
6. When I guess a correct letter, the prompt reveals the correct guess.
7. If I guess the word correctly I am informed I have done so, and a new round starts.
8. If I do not guess the word after 6 tries, then the game ends, and I am presented with the correct word.
