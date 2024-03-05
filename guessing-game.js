function guessingGame() {
  const num = 60;
  let guess = 0;
  let won = false;

  return function (numGuess) {
    if (won) return "The game is over, you already won!";

    // console.log(numGuess);
    if (num < numGuess) {
      guess += 1;
      return `${numGuess} is too high!`;
    } else if (num > numGuess) {
      guess += 1;
      return `${numGuess} is too low!`;
    } else {
      won = true;
      guess += 1;

      return `You win! You found ${num} in ${guess} guesses.`;
    }
  };
}

module.exports = { guessingGame };

const game = guessingGame();
