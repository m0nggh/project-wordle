import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addToGuesses = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  };

  return (
    <>
      <PreviousGuesses guesses={guesses} answer={answer}></PreviousGuesses>
      <GuessInput addToGuesses={addToGuesses} />
    </>
  );
}

export default Game;
