import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses";
import VictoryBanner from "../VictoryBanner";
import DefeatBanner from "../DefeatBanner";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("Pending");

  const addToGuesses = (guess) => {
    const nextGuesses = [...guesses, guess];
    // validate answer
    if (guess === answer) {
      setGameStatus("Victory");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("Defeat");
    }
    setGuesses(nextGuesses);
  };

  // validate the guesses to be used instead
  const checkedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <PreviousGuesses checkedGuesses={checkedGuesses}></PreviousGuesses>

      <GuessInput addToGuesses={addToGuesses} gameStatus={gameStatus} />

      {gameStatus === "Victory" && (
        <VictoryBanner numOfGuesses={guesses.length} />
      )}
      {gameStatus === "Defeat" && <DefeatBanner answer={answer} />}

      <Keyboard checkedGuesses={checkedGuesses} />
    </>
  );
}

export default Game;
